package com.project.cuisine_compass.user;


import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.cuisine.CuisineRepository;
import com.project.cuisine_compass.security.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final JwtTokenUtil jwtTokenUtil;
    private final UserRepo userRepository;
    private final CuisineRepository cuisineRepository;
    private final EmailService emailService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new CustomUserDetails(user.get().getUsername(), user.get().getPassword(), user.get().getRoles());
    }

    public User getUserByUserName(String userName) {
        User user = userRepository.getUserByUserName(userName);
        return user;
    }

    public ResponseEntity<?> registerUser(User user) {
        if(user.getRole() == Role.ROLE_ADMIN){
            user.setRole(Role.ROLE_ADMIN);
        }else {
            user.setRole(Role.ROLE_USER);
        }
        user.setPassword(hashPassword(user.getPassword()));
        Optional<User> existingUserByUsername = userRepository.findByUsername(user.getUsername());
        Optional<User> existingUserByEmail = userRepository.findByEmail(user.getEmail());
        if (existingUserByEmail.isPresent()) {
            return ResponseEntity.badRequest().body(new CustomMessage("User already exists with email: " + user.getEmail()));
        }
        if (existingUserByUsername.isPresent()) {
            return ResponseEntity.badRequest().body(new CustomMessage("User already exists with username: " + user.getUsername()));
        }
        userRepository.save(user);
        return ResponseEntity.ok(new CustomMessage("User registered successfully"));
    }

    public String hashPassword(String password) {
        return new PasswordEncoder().encodePassword(password);
    }


    public JwtResponse loginUser(UserDetails userDetails) {
        String token = jwtTokenUtil.generateToken(userDetails);
        return new JwtResponse(token);
    }


    public ResponseEntity<?> updateUserPreferences(Long userId, List<Long> cuisineIds) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new CustomMessage("User not found with id: " + userId));
        }
        User existingUser = user.get();
        HashSet<Cuisine> cuisines = new HashSet<>(cuisineRepository.findAllById(cuisineIds));
        //check if cuisineIds are present in the database
        if (cuisines.size() != cuisineIds.size()) {
            return ResponseEntity.badRequest().body(new CustomMessage("Invalid cuisine ids"));
        }
        existingUser.setCuisines(cuisines);
        userRepository.save(existingUser);
        return ResponseEntity.ok(new CustomMessage("User preferences updated successfully"));
    }


    public ResponseEntity<?> reset(ResetRequest resetRequest) {
        Optional<User> userOptional = userRepository.findByEmail(resetRequest.getEmail());
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body(new CustomMessage("User not found with email: " + resetRequest.getEmail()));
        }
        User user = userOptional.get();
        user.setResetToken(new PasswordEncoder().encodePassword(user.getEmail()));
        userRepository.save(user);
        emailService.sendEmail(user.getEmail(), "Password reset", "To reset your password, please click here: https://cuisinecompass.onrender.com/api/auth/reset-password?token=" + Base64.getUrlEncoder().encodeToString(user.getResetToken().getBytes()));
        System.out.println("token: " + user.getResetToken());
        return ResponseEntity.ok(new CustomMessage("Please check your email for password reset link"));
    }

    public ResponseEntity<?> changePassword(String token) {
        String decodedToken = new String(Base64.getUrlDecoder().decode(token));
        Optional<User> userOptional = userRepository.findByResetToken(decodedToken);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body(new CustomMessage("Invalid token, please try to reset your password again"));
        }
        User user = userOptional.get();
        String randomPassword = new PasswordEncoder().generateRandomPassword();
        user.setPassword(new PasswordEncoder().encodePassword(randomPassword));
        user.setResetToken(null);
        userRepository.save(user);
        emailService.sendEmail(user.getEmail(), "Password reset", "Your new password is: " + randomPassword);
        return ResponseEntity.ok(new CustomMessage("Password reset successfully, please check your email for new password"));
    }
}



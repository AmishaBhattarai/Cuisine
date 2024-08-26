package com.project.cuisine_compass.auth;

import com.project.cuisine_compass.security.CustomMessage;
import com.project.cuisine_compass.security.JwtTokenUtil;
import com.project.cuisine_compass.security.PasswordEncoder;
import com.project.cuisine_compass.user.*;
import com.project.cuisine_compass.util.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepo userRepo;

    private final JwtTokenUtil jwtUtil;
    private final UserService userService;

    /**
     * @return ResponseEntity with the currently logged-in user in the body of the response
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Validated RegisterUserDto user) {
        return userService.registerUser(user.toUser());
    }

    /**
     * Login endpoint that returns a JWT token if the login was successful
     *
     * @param loginRequest LoginUserDto object
     * @return ResponseEntity with a message in the body of the response that indicates whether the login was successful or not
     */

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody @Validated LoginUserDto loginRequest) {
        System.out.printf("loginRequest: %s\n", loginRequest);
        UserDetails userDetails = userService.loadUserByUsername(loginRequest.getUsername());
        if (userDetails == null) {
            return ResponseEntity.badRequest().body(new CustomMessage("Please check your username"));
        }
        if (new PasswordEncoder().matches(loginRequest.getPassword(), userDetails.getPassword())) {
            return ResponseEntity.badRequest().body(new CustomMessage("Please check your password"));
        }

        return ResponseEntity.ok(userService.loginUser(userDetails));
    }


    @PostMapping("/reset")
    private ResponseEntity<?> reset(@RequestBody @Validated ResetRequest resetRequest) {
        return userService.reset(resetRequest);
    }

    @GetMapping("/reset-password")
    private ResponseEntity<?> resetPassword(@RequestParam("token") String token) {
        return userService.changePassword(token);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok().body(new MessageResponse("User logged out successfully!"));
    }

}

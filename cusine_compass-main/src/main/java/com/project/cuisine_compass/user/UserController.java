package com.project.cuisine_compass.user;

import com.project.cuisine_compass.account.AccountService;
import com.project.cuisine_compass.restaurant.Restaurant;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final AccountService accountService;


    @PostMapping("/{userId}/preferences")
    public ResponseEntity<?> updateUserPreferences(
            @PathVariable Long userId,
            @RequestBody List<Long> cuisineIds
    ) {
        return userService.updateUserPreferences(userId, cuisineIds);
    }

    @GetMapping("/profile")
    public User getUserProfileDetail(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.getUserByUserName(username);
        if(user.getRole() == Role.ROLE_ADMIN){
            return findRestaurantByUserId(user);
        }
        return user;
    }

    private User findRestaurantByUserId(User user) {
        List<Restaurant> restaurantList = accountService.findRestaurantByUserId(user);
        user.setRestaurants(restaurantList);
        return user;
    }



}

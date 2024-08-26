package com.project.cuisine_compass.restaurant;

import com.project.cuisine_compass.algorithmhelper.RecommendationService;
import com.project.cuisine_compass.security.CustomMessage;
import com.project.cuisine_compass.user.Role;
import com.project.cuisine_compass.user.User;
import com.project.cuisine_compass.user.UserService;
import com.project.cuisine_compass.util.MessageResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RestaurantController {

    private final RestaurantService restaurantService;

    private final UserService userService;

    private final RecommendationService recommendationService;

    public RestaurantController(RestaurantService restaurantService, UserService userService, RecommendationService recommendationService) {
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.recommendationService = recommendationService;
    }

    @PostMapping("/admin/restaurant/add")
    public RestaurantResponseDto addRestaurant(@RequestBody RestaurantRequestDto restaurantDto) {
        RestaurantResponseDto response = restaurantService.addRestaurant(restaurantDto);
        System.out.println(response.getId());
        return response;
    }

    @PutMapping("/admin/restaurant/update")
    public RestaurantResponseDto updateRestaurant(@RequestParam Long restaurantId,
                                                  @RequestBody RestaurantRequestDto restaurantDto) {
        return restaurantService.updateRestaurant(restaurantId, restaurantDto);
    }

    @DeleteMapping("/admin/restaurant/delete")
    public MessageResponse deleteRestaurant(@RequestParam Long restaurantId) {
        return restaurantService.deleteRestaurant(restaurantId);
    }


    @GetMapping("/restaurant/list")
    public ResponseEntity<?> getAllRestaurant(@RequestParam(value = "page", defaultValue = "0") int page,
                                              @RequestParam(value = "size", defaultValue = "10") int size) {
        return restaurantService.getAllRestaurant(page, size);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<?> getRestaurant(@PathVariable Long restaurantId) {
        return restaurantService.getRestaurant(restaurantId);
    }

    @GetMapping("/restaurant/menu/{restaurantId}")
    public ResponseEntity<?> getMenuByRestaurantId(@PathVariable Long restaurantId,
                                                   @RequestParam(value = "cuisineId", required = false) Long cuisineId) {
        return restaurantService.getMenuItemsByRestaurantId(restaurantId, cuisineId);
    }

    @GetMapping("/restaurant/getRestaurant/{latitude}/{longitude}")
    public ResponseEntity<List<RestaurantResponseDto>> getSuggestedRestaurant(@PathVariable("latitude") double latitude, @PathVariable("longitude") double longitude, HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            // If the Authorization header is not present or does not start with "Bearer ", return all restaurants.
            return ResponseEntity.ok(restaurantService.getAllRestaurantForEveryOne());
        }

        // If the Authorization header is present and starts with "Bearer ", proceed with fetching the recommended restaurants.
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userService.getUserByUserName(username);
        user.setLatitude(latitude);
        user.setLongitude(longitude);
        return ResponseEntity.ok(recommendationService.getRecommendedRestaurants(user, 10));
    }
}

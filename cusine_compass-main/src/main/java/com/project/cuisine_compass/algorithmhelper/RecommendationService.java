package com.project.cuisine_compass.algorithmhelper;

import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.restaurant.*;
import com.project.cuisine_compass.user.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class RecommendationService {

    private final RestaurantRepo restaurantRepo;
    private final RestaurantMapper restaurantMapper;
    private final DataService dataService;

    public List<RestaurantResponseDto> getRecommendedRestaurants(User user, int numberOfRestaurants) {
        List<Restaurant> allRestaurants = restaurantRepo.findAll();

        // Calculate cosine similarity between user's preferences and each restaurant's menu
        for (Restaurant restaurant : allRestaurants) {
            double similarity = calculateCosineSimilarity(user.getCuisines(), restaurant.getMenuItems());
            restaurant.setCosineSimilarity(similarity);
        }

        // Calculate distance for each restaurant based on the user's location
        for (Restaurant restaurant : allRestaurants) {
            setDistance(restaurant, user.getLatitude(), user.getLongitude());
        }

        // Sort restaurants by cosine similarity and then by distance
        allRestaurants.sort((r1, r2) -> {
            int similarityComparison = Double.compare(r2.getCosineSimilarity(), r1.getCosineSimilarity());
            if (similarityComparison != 0) {
                return similarityComparison;
            } else {
                return Double.compare(r1.getDistance(), r2.getDistance());
            }
        });

        List<RestaurantResponseDto> recommendedRestaurants = new ArrayList<>();
        allRestaurants.stream().limit(numberOfRestaurants).forEach(restaurant -> {
            recommendedRestaurants.add(restaurantMapper.restaurantToRestaurantResponseDto(restaurant));
        });

        return recommendedRestaurants;
    }



    private double calculateCosineSimilarity(Set<Cuisine> userPreferences, List<Menu> restaurantMenus) {
        // Convert user preferences and menu items into vectors
        // This is a simplified example. You'll need to implement the actual conversion.
        double[] userVector = convertToVector(userPreferences);
        double[] restaurantVector = convertToVector(restaurantMenus);

        // Calculate cosine similarity
        double dotProduct = 0.0;
        double userVectorMagnitude = 0.0;
        double restaurantVectorMagnitude = 0.0;

        for (int i = 0; i < userVector.length; i++) {
            dotProduct += userVector[i] * restaurantVector[i];
            userVectorMagnitude += Math.pow(userVector[i], 2);
            restaurantVectorMagnitude += Math.pow(restaurantVector[i], 2);
        }

        userVectorMagnitude = Math.sqrt(userVectorMagnitude);
        restaurantVectorMagnitude = Math.sqrt(restaurantVectorMagnitude);

        return dotProduct / (userVectorMagnitude * restaurantVectorMagnitude);
    }


    private double[] convertToVector(Set<Cuisine> userPreferences) {
        // Assuming a fixed set of all possible cuisines
        List<Cuisine> allCuisines = dataService.getAllCuisines();

        // Initialize a vector with zeros
        double[] vector = new double[allCuisines.size()];

        // Set the value to 1 for each cuisine the user prefers
        for (Cuisine cuisine : userPreferences) {
            int index = allCuisines.indexOf(cuisine);
            if (index != -1) {
                vector[index] = 1.0;
            }
        }

        return vector;
    }

    private double[] convertToVector(List<Menu> restaurantMenus) {
        // Assuming a fixed set of all possible menu items
        List<Menu> allMenuItems = dataService.getAllMenuItems();

        // Initialize a vector with zeros
        double[] vector = new double[allMenuItems.size()];

        // Count the occurrences of each menu item
        for (Menu menu : restaurantMenus) {
            int index = allMenuItems.indexOf(menu.getName());
            if (index != -1) {
                vector[index] += 1.0;
            }
        }

        return vector;
    }


    public void setDistance(Restaurant restaurant, double userLatitude, double userLongitude) {
        double distance = calculateDistance(userLatitude, userLongitude, restaurant.getLatitude(), restaurant.getLongitude());
        restaurant.setDistance(distance);
    }

    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        // Convert latitude and longitude from degrees to radians
        double lat1Rad = Math.toRadians(lat1);
        double lon1Rad = Math.toRadians(lon1);
        double lat2Rad = Math.toRadians(lat2);
        double lon2Rad = Math.toRadians(lon2);

        // Earth's radius in kilometers (use 3956 for miles)
        double earthRadiusKm = 6371.0;

        // Haversine formula
        double dLat = lat2Rad - lat1Rad;
        double dLon = lon2Rad - lon1Rad;
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Distance in kilometers
        double distanceKm = earthRadiusKm * c;

        return distanceKm;
    }


}

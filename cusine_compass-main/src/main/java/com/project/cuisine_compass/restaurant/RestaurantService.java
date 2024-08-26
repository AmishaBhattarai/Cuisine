package com.project.cuisine_compass.restaurant;


import com.project.cuisine_compass.exception.ServiceException;
import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.menu.MenuMapper;
import com.project.cuisine_compass.menu.MenuRepo;
import com.project.cuisine_compass.util.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final MenuRepo menuRepo;
    private final RestaurantRepo restaurantRepo;

    private final RestaurantMapper restaurantMapper;
    private final MenuMapper menuMapper;

    public RestaurantResponseDto updateRestaurant(Long restaurantId, RestaurantRequestDto restaurantDto) {
        Restaurant restaurantExist = restaurantRepo.findRestaurantById(restaurantId);
        if (restaurantExist == null) {
            throw new ServiceException("restaurant with given id not found");
        }
        Restaurant restaurant = restaurantMapper.restaurantRequestDtoToRestaurant(restaurantDto);
        restaurant.setId(restaurantId);
        Restaurant response = restaurantRepo.save(restaurant);
        return restaurantMapper.restaurantToRestaurantResponseDto(response);

    }

    public MessageResponse deleteRestaurant(Long restaurantId) {
        Restaurant restaurant = restaurantRepo.findRestaurantById(restaurantId);
        if (restaurant == null) {
            return new MessageResponse("Restaurant with given id not found");
        }
        restaurantRepo.deleteById(restaurantId);
        return new MessageResponse("Restaurant deleted successfully");

    }

    public ResponseEntity<?> getAllRestaurant(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        Page<Restaurant> restaurants = restaurantRepo.findAll(pageable);
        return ResponseEntity.ok(PageRestaurant.builder()
                .size(size)
                .page(page)
                .nextPage(restaurants.hasNext())
                .previousPage(restaurants.hasPrevious())
                .totalElements(restaurants.getTotalElements())
                .totalPages(restaurants.getTotalPages())
                .content(restaurantMapper.toDtoList(restaurants.getContent()))
                .build());

    }

    public ResponseEntity<?> getRestaurant(Long restaurantId) {
        return ResponseEntity.ok(restaurantMapper.restaurantToRestaurantResponseDto(restaurantRepo.findRestaurantById(restaurantId)));
    }


    public ResponseEntity<?> getMenuItemsByRestaurantId(Long restaurantId, Long cuisineId) {
        Optional<Restaurant> restaurant = restaurantRepo.findById(restaurantId);
        if (restaurant.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Restaurant not found."));
        }
        if (cuisineId == null) {
            return ResponseEntity.ok(menuMapper.menuToMenuItemResponseDto(restaurant.get().getMenuItems()));
        }
        //filter by cuisine
        List<Menu> menuItems = restaurant.get().getMenuItems();
        menuItems.stream().forEach(menu -> {
            if (!menu.getCuisine().getId().equals(cuisineId)) {
                menuItems.remove(menu);
            }
        });
        return ResponseEntity.ok(menuMapper.menuToMenuItemResponseDto(menuItems));
    }


    public RestaurantResponseDto addRestaurant(RestaurantRequestDto restaurantDtO) {
        Restaurant restaurant = restaurantMapper.restaurantRequestDtoToRestaurant(restaurantDtO);
        Restaurant response = restaurantRepo.save(restaurant);
        restaurantMapper.restaurantToRestaurantResponseDto(response);
        return restaurantMapper.restaurantToRestaurantResponseDto(response);
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepo.findAll();
    }

    public List<RestaurantResponseDto> getAllRestaurantForEveryOne() {
        return restaurantMapper.toDtoList(restaurantRepo.findAll());
    }
}

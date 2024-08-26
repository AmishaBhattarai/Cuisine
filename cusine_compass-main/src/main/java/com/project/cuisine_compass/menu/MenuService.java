package com.project.cuisine_compass.menu;

import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.cuisine.CuisineRepository;
import com.project.cuisine_compass.restaurant.Restaurant;
import com.project.cuisine_compass.restaurant.RestaurantRepo;
import com.project.cuisine_compass.util.MessageResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuMapper menuMapper;
    private final MenuRepo menuRepo;
    private final RestaurantRepo restaurantRepo;
    private final CuisineRepository cuisineRepo;

    public ResponseEntity<?> addMenuItem(MenuItemRequestDto menuDto, Long restaurantId) {
        Optional<Cuisine> cuisine = cuisineRepo.findById(menuDto.getCuisineId());
        if (cuisine.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Cuisine not found."));
        }
        Optional<Restaurant> restaurant = restaurantRepo.findById(restaurantId);
        if (restaurant.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Restaurant not found."));
        }
        Menu menu = menuMapper.menuRequestDtoToMenu(menuDto);
        menu.setCuisine(cuisine.get());
        Menu savedMenu = menuRepo.save(menu);
        restaurant.get().addMenu(savedMenu);
        restaurantRepo.save(restaurant.get());
        return ResponseEntity.ok(menuMapper.menuToMenuItemResponseDto(savedMenu));
    }


    @Transactional
    public ResponseEntity<?> updateMenuItem(MenuItemRequestDto menuItemDto, Long menuItemId, Long restaurantId) {

        Optional<Restaurant> restaurant = restaurantRepo.findById(restaurantId);
        if (restaurant.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Restaurant not found. with given id hence " +
                    "cannot update menu item."));
        }

        var menuItem = menuRepo.findById(menuItemId);
        if(menuItem == null){
            return ResponseEntity.badRequest().body(new MessageResponse("menuid not found"));
        }
        Optional<Cuisine> cuisine = cuisineRepo.findById(menuItemDto.getCuisineId());
        if (cuisine.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Cuisine not found."));
        }
        Menu menu = menuMapper.menuRequestDtoToMenu(menuItemDto);
        menu.setId(menuItemId);
        menu.setCuisine(cuisine.get());
        Menu savedMenu = menuRepo.save(menu);
        return ResponseEntity.ok(menuMapper.menuToMenuItemResponseDto(savedMenu));
    }


    public ResponseEntity<MessageResponse> deleteMenuItem(Long menuItemId) {
        Optional<Menu> menu = menuRepo.findById(menuItemId);
        if (menu.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Menu item not found."));
        }
        menuRepo.deleteById(menuItemId);
        return ResponseEntity.ok(new MessageResponse("Menu item deleted successfully."));
    }

}

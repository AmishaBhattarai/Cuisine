package com.project.cuisine_compass.restaurant;

import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestaurantRepo extends JpaRepository<Restaurant, Long> {

    @Query("SELECT r FROM Restaurant r WHERE r.id =?1")
    Restaurant findRestaurantById(Long restaurantId);

    @Query("SELECT r.menuItems FROM Restaurant r join r.menuItems m where r.id =?1")
    Page<Menu> findMenuByRestaurantId(Long restaurantId, PageRequest pageRequest);


    @Query("SELECT r.menuItems FROM Restaurant r join r.menuItems m where r.id =?1 and m.cuisine.id =?2")
    Page<Menu> findMenuByRestaurantIdAndCuisineId(Long restaurantId, Long cuisineId, PageRequest pageRequest);

    @Query("SELECT r FROM Restaurant r WHERE r.email =?1")
    List<Restaurant> findRestaurantByUserEmail(String email);

    @Query("SELECT r FROM Restaurant r WHERE r.user =?1")
    List<Restaurant> findRestaurantsByAccountId(User user);


    @Query("SELECT m FROM Restaurant r join r.menuItems m where r.id =?1 and m.id =?2")
    Optional<Menu> findMenuByRestaurantIdAndmenuId(Long menuItemId, Long restaurantId);
}

package com.project.cuisine_compass.algorithmhelper;

import com.project.cuisine_compass.cuisine.Cuisine;
import com.project.cuisine_compass.cuisine.CuisineRepository;
import com.project.cuisine_compass.menu.Menu;
import com.project.cuisine_compass.menu.MenuRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {

    private final CuisineRepository cuisineRepository;

    private final MenuRepo menuRepo;

    public DataService(CuisineRepository cuisineRepository, MenuRepo menuRepo) {
        this.cuisineRepository = cuisineRepository;
        this.menuRepo = menuRepo;
    }


    public List<Cuisine> getAllCuisines() {
        return cuisineRepository.findAll();
    }

    public List<Menu> getAllMenuItems() {
        return menuRepo.findAll();
    }


}

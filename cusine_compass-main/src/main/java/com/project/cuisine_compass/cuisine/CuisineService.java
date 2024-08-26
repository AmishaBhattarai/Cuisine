package com.project.cuisine_compass.cuisine;

import com.project.cuisine_compass.security.CustomMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CuisineService {
    private final CuisineRepository cuisineRepository;
    private final CuisineMapper cuisineMapper;

    public ResponseEntity<?> addCuisineItem(CuisineItemDto cuisineItemDto) {
        Cuisine cuisine = cuisineMapper.toCuisine(cuisineItemDto);
        cuisineRepository.save(cuisine);
        return ResponseEntity.ok(new CustomMessage("Cuisine added successfully"));
    }

    public ResponseEntity<?> updateCuisineItem(CuisineItemDto cuisineItemDto, Long cuisineId) {
        Optional<Cuisine> savedCuisine = cuisineRepository.findById(cuisineId);
        if (savedCuisine.isEmpty()) {
            return ResponseEntity.badRequest().body(new CustomMessage("Cuisine not found."));
        }
        Cuisine cuisine = cuisineMapper.toCuisine(cuisineItemDto);
        cuisine.setId(cuisineId);
        cuisineRepository.save(cuisine);
        return ResponseEntity.ok(new CustomMessage("updated cuisine."));
    }

    public ResponseEntity<?> deleteCuisineItem(Long cuisineId) {
        Optional<Cuisine> savedCuisine = cuisineRepository.findById(cuisineId);
        if (savedCuisine.isEmpty()) {
            return ResponseEntity.badRequest().body(new CustomMessage("Cuisine not found."));
        }
        cuisineRepository.delete(savedCuisine.get());
        return ResponseEntity.ok(new CustomMessage("Deleted Cuisine."));
    }

    public ResponseEntity<?> getAllCuisine(){
        return ResponseEntity.ok(cuisineMapper.toCuisineDto(cuisineRepository.findAll()));
    }
}
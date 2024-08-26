package com.project.cuisine_compass.cuisine;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cuisine")
@RequiredArgsConstructor
public class CuisineController {

    private final CuisineService cuisineService;

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        return cuisineService.getAllCuisine();
    }

    @PostMapping("/admin/add")
    public ResponseEntity<?> addCuisine(@RequestBody @Validated CuisineItemDto cuisineItemDto) {
        return cuisineService.addCuisineItem(cuisineItemDto);
    }

    @PutMapping("/admin/update")
    public ResponseEntity<?> updateCuisineItem(@RequestParam Long cuisineId, @RequestBody @Validated CuisineItemDto cuisineItemDto) {
        return cuisineService.updateCuisineItem(cuisineItemDto, cuisineId);
    }

    //delete
    @DeleteMapping("/admin/delete")
    public ResponseEntity<?> deleteCuisineItem(@RequestParam(value = "cuisineId") Long cuisineId) {
        return cuisineService.deleteCuisineItem(cuisineId);
    }

}

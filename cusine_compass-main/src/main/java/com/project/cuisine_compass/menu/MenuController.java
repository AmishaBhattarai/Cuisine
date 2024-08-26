package com.project.cuisine_compass.menu;


import com.project.cuisine_compass.util.MessageResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @PostMapping("/admin/add")
    public ResponseEntity<?> addMenu(@RequestBody @Validated MenuItemRequestDto menuDto, @RequestParam(value = "restaurantId") Long restaurantId, HttpServletRequest request) {

            return menuService.addMenuItem(menuDto, restaurantId);

    }

    @PutMapping("/admin/update")
    public ResponseEntity<?> updateMenu(@RequestParam Long menuItemId,
                                        @RequestParam Long restaurantId,
                                        @RequestBody @Validated MenuItemRequestDto menuItemDto) {
            return menuService.updateMenuItem(menuItemDto, menuItemId, restaurantId);

    }

    @DeleteMapping("/admin/delete")
    public ResponseEntity<MessageResponse> deleteMenu(@RequestParam Long menuItemId) {
            return menuService.deleteMenuItem(menuItemId);
    }


}


package com.project.cuisine_compass.menu;

import org.mapstruct.*;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)
public interface MenuMapper {
    Menu menuRequestDtoToMenu(MenuItemRequestDto menuDto);

    MenuResponseDto menuToMenuItemResponseDto(Menu savedMenu);

    List<MenuResponseDto> menuToMenuItemResponseDto(List<Menu> savedMenu);

    MenuResponseDto menuToMenuItemResponseDto(Optional<Menu> menu);
}

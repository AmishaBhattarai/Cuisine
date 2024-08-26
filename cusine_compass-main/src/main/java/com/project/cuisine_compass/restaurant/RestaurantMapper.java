package com.project.cuisine_compass.restaurant;

import jakarta.validation.constraints.NotNull;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)
public interface RestaurantMapper {
    RestaurantResponseDto restaurantToRestaurantResponseDto(@NotNull Restaurant Restaurant);

    Restaurant restaurantRequestDtoToRestaurant(@NotNull RestaurantRequestDto restaurantDto);

    List<RestaurantResponseDto> toDtoList(List<Restaurant> content);
}

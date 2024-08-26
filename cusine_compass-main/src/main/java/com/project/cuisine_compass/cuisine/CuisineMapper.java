package com.project.cuisine_compass.cuisine;


import org.mapstruct.*;

import java.util.List;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.CONSTRUCTOR,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED
)
public interface CuisineMapper {
    Cuisine toCuisine(CuisineItemDto cuisineItemDto);

    List<CuisineResponseDto> toCuisineDto(List<Cuisine> all);
}

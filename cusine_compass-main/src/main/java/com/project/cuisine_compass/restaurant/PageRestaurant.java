package com.project.cuisine_compass.restaurant;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PageRestaurant {
    private Integer page;
    private Integer size;
    private Long totalElements;
    private Integer totalPages;
    private boolean nextPage;
    private boolean previousPage;
    private List<RestaurantResponseDto> content;
}

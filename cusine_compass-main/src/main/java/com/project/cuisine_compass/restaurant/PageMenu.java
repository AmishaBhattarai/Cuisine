package com.project.cuisine_compass.restaurant;

import com.project.cuisine_compass.menu.MenuResponseDto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PageMenu {
    private Integer page;
    private Integer size;
    private Long totalElements;
    private Integer totalPages;
    private boolean nextPage;
    private boolean previousPage;
    private List<MenuResponseDto> content;

}

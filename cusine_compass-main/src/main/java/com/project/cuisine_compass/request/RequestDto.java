package com.project.cuisine_compass.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RequestDto {
    private String fullName;
    private String yourMessage;
}

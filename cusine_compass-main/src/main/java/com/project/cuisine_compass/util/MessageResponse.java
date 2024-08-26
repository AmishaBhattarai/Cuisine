package com.project.cuisine_compass.util;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MessageResponse {
    private String message;

    public MessageResponse(String message) {

        this.message = message;
    }

    public static String successResponse(String message){
        return message;
    }
    public static String errorResponse(String message){
        return message;
    }


}

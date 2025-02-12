package com.project.cuisine_compass.security;

public class CustomMessage {

    private final String message;

    public CustomMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return message;
    }

    public String toJson() {
        return "{\"message\":\"" + message + "\"}";
    }
}
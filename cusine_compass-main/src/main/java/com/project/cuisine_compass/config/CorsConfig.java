package com.project.cuisine_compass.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000," +
                        "http://localhost:8080," +
                        "http://localhost:3002," +
                        "https://cuisinecompass.onrender.com," +
                        "https://superadmin-ls2i.onrender.com," +
                        "https://admincuisine.onrender.com"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}

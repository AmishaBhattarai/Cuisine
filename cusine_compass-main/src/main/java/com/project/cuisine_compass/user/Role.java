package com.project.cuisine_compass.user;

import jakarta.persistence.*;
import lombok.Data;
public enum Role {
    ROLE_USER,
    ROLE_SUPER_ADMIN,
    ROLE_ADMIN;
}
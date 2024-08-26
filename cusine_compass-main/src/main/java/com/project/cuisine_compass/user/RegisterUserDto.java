package com.project.cuisine_compass.user;

import com.project.cuisine_compass.user.User;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

@Data
@Schema(name = "RegisterUser", description = "RegisterUser details")
@Builder
public class RegisterUserDto {
    @NotNull(message = "Username is required")
    @NotEmpty(message = "Username is required")
    @Size(min = 2, max = 20, message = "Username must be between 2 and 20 characters")
    @Schema(description = "username", example = "username")
    private String username;

    @NotNull(message = "Password is required")
    @NotEmpty(message = "Password is required")
    @Size(min = 6, max = 20, message = "Password must be between 6 and 20 characters")
    @Pattern(regexp = "^(?!.*\\s).*$", message = "Password cannot contain spaces")
    @Pattern(regexp = "^(?=.*[a-z]).*$", message = "Password must contain at least one lowercase letter")
    @Pattern(regexp = "^(?=.*[A-Z]).*$", message = "Password must contain at least one uppercase letter")
    @Pattern(regexp = "^(?=.*[0-9]).*$", message = "Password must contain at least one number")
    @Pattern(regexp = "^(?=.*[!@#$%^&*]).*$", message = "Password must contain at least one special character")
    @Schema(description = "password", example = "Password@123")
    private String password;

    @NotNull(message = "Email is required")
    @NotEmpty(message = "Email is required")
    @Email(message = "Invalid email format")
    @Schema(description = "email", example = "email@example.com")
    private String email;

    @NotNull(message = "Name is required")
    @NotEmpty(message = "Name is required")
    @Size(min = 2, max = 20, message = "Name must be between 2 and 20 characters")
    @Schema(description = "name", example = "name")
    private String name;

    //phone number
    @NotNull(message = "Phone number is required")
    @NotEmpty(message = "Phone number is required")
    @Size(min = 10, max = 20, message = "Phone number is invalid")
    @Schema(description = "phone number", example = "0123456789")
    private String phone;

    private Role role;

    public User toUser() {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setPhoneNumber(phone);
        user.setRole(role);
        return user;
    }

}

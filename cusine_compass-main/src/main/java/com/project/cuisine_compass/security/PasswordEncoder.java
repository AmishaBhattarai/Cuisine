package com.project.cuisine_compass.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * The PasswordEncoder class is used to encode the password before storing it in the database
 * and to match the password entered by the user with the password stored in the database during authentication
 *
 * @version 1.0
 */
@Component
public class PasswordEncoder {
    @Value("${password.salt}")
    private String salt;

    public String encodePassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String saltedPassword = password + salt;
        return passwordEncoder.encode(saltedPassword);
    }

    public boolean matches(String enteredPassword, String storedHashedPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String saltedEnteredPassword = enteredPassword + salt;
        return !passwordEncoder.matches(saltedEnteredPassword, storedHashedPassword);
    }

    public static String generateRandomPassword(){
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            int index = (int) (chars.length() * Math.random());
            sb.append(chars.charAt(index));
        }
        return sb.toString();
    }
}
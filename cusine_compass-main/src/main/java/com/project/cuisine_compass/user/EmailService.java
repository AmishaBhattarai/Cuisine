package com.project.cuisine_compass.user;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class EmailService {

    private  final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

        public void sendEmail(String email, String subject, String text) {
        new Thread(() -> {
            try {
                SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
                simpleMailMessage.setFrom("CuisineCompass");
                simpleMailMessage.setTo(email);
                simpleMailMessage.setSubject(subject);
                simpleMailMessage.setText(text);
                javaMailSender.send(simpleMailMessage);
            } catch (Exception e) {
                e.printStackTrace();
                Logger.getLogger("Email").warning(e.getMessage());
            }
        }).start();
    }
}

package com.project.cuisine_compass.request;

import com.project.cuisine_compass.util.MessageResponse;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
    private final RequestRepo requestRepo;

    public RequestService(RequestRepo requestRepo) {
        this.requestRepo = requestRepo;
    }

    public MessageResponse addRequest(RequestDto requestDto) {
        Request request = Request.builder()
                .fullName(requestDto.getFullName())
                .yourMessage(requestDto.getYourMessage())
                .build();
        requestRepo.save(request);
        return new MessageResponse("Request added successfully");
    }

    public MessageResponse addSpecialRequest(RequestDto requestDto) {
        Request request = Request.builder()
                .fullName(requestDto.getFullName())
                .yourMessage(requestDto.getYourMessage())
                .build();
        requestRepo.save(request);
        return new MessageResponse("Special request added successfully");
    }
}

package com.project.cuisine_compass.request;

import com.project.cuisine_compass.util.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class Requestcontroller {

    RequestService requestService;
    @PostMapping("/request")
    public MessageResponse addRequest(RequestDto requestDto) {
        return this.requestService.addRequest(requestDto);
    }

    @PostMapping("/admin/special-request")
    public MessageResponse addSpecialRequest(RequestDto requestDto) {
        return this.requestService.addSpecialRequest(requestDto);
    }
}

package com.react.subway.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.validation.annotation.Validated;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginRequest {
    @Email
    @NotEmpty
    private String userEmail;

    @NotEmpty
    private String userPassword;

    // Getters and Setters
}

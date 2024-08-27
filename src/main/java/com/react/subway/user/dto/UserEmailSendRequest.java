package com.react.subway.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEmailSendRequest {
    @Email
    @NotEmpty
    private String userEmail;

    // Getters and Setters
}

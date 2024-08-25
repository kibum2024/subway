package com.react.subway.event.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventOpenRequest {

    @NotEmpty
    private String keyword;
}

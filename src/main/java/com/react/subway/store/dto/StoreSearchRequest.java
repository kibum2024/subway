package com.react.subway.store.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StoreSearchRequest {

    @NotEmpty
    private String keyword;
}

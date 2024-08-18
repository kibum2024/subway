package com.react.subway.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String menuLargeCategory;
    private String menuSmallCategory;
    private String menuName;
    private String menuUrl;
}

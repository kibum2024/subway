package com.react.subway.menu;

import com.react.subway.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    @Query(value = "select * from menu", nativeQuery = true)
    List<Menu> findMenusBySmallCategory();

}

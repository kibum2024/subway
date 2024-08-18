package com.react.subway.menu;

import com.react.subway.entity.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/menus")
    public List<Menu> getMenus() {
        return menuService.getMenusByCategory();
    }

}

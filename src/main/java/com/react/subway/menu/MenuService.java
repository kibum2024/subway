package com.react.subway.menu;

import com.react.subway.entity.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public List<Menu> getMenusByCategory() {
        return menuRepository.findMenusBySmallCategory();
    }

}

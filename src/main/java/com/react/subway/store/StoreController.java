package com.react.subway.store;

import com.react.subway.entity.Store;
import com.react.subway.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreService storeService;

    @GetMapping("/stores")
    public List<Store> getStores() {
        return storeService.getStoreByAll();
    }
}

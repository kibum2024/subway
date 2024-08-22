package com.react.subway.store;

import com.react.subway.entity.Store;
import com.react.subway.store.StoreService;
import com.react.subway.store.dto.StoreSearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/search")
    public List<Store> getStoreSearch(@RequestParam("keyword") String keyword) {
        return storeService.getStoreBySearch(keyword);
    }

}

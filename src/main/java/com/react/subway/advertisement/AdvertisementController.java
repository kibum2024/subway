package com.react.subway.advertisement;

import com.react.subway.entity.Advertisement;
import com.react.subway.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/news")
public class AdvertisementController {
    @Autowired
    private AdvertisementService advertisementService;

    @GetMapping("/advertisements")
    public List<Advertisement> getStores() {
        return advertisementService.getAdvertisementByAll();
    }
}

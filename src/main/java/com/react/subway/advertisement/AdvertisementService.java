package com.react.subway.advertisement;

import com.react.subway.entity.Advertisement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvertisementService {

    @Autowired
    private AdvertisementRepsitory advertisementRepsitory;

    public List<Advertisement> getAdvertisementByAll() {
        return advertisementRepsitory.findAdvertisementByAll();
    }

}

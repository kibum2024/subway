package com.react.subway.store;

import com.react.subway.entity.Store;
import com.react.subway.store.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {
    @Autowired
    private StoreRepository storeRepository;

    public List<Store> getStoreByAll() {
        return storeRepository.findStoreByAll();
    }

    public List<Store> getStoreBySearch(String keyword) {
        return storeRepository.findStoreBySearch(keyword);
    }
}

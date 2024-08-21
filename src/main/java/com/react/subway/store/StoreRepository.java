package com.react.subway.store;

import com.react.subway.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StoreRepository  extends JpaRepository<Store, Long> {
    @Query(value = "select * from store", nativeQuery = true)
    List<Store> findStoreByAll();
}

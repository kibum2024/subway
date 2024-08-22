package com.react.subway.store;

import com.react.subway.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreRepository  extends JpaRepository<Store, Long> {
    @Query(value = "select * from store " +
            "where store_name like %:keyword% " +
            "or address like %:keyword%", nativeQuery = true)
    List<Store> findStoreBySearch(@Param("keyword") String keyword);

    @Query(value = "select * from store", nativeQuery = true)
    List<Store> findStoreByAll();

}

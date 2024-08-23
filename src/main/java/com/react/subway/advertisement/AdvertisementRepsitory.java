package com.react.subway.advertisement;

import com.react.subway.entity.Advertisement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdvertisementRepsitory  extends JpaRepository<Advertisement, Long> {
    @Query(value = "select * from advertisement order by view_date desc  ", nativeQuery = true)
    List<Advertisement> findAdvertisementByAll();
}

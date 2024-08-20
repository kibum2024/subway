package com.react.subway.menu;

import com.react.subway.entity.Kindarticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KindarticleRepository extends JpaRepository<Kindarticle, Long> {
    @Query(value = "select * from kindarticle order by kind_code, article_code asc", nativeQuery = true)
    List<Kindarticle> findKindarticleBykindCode();
}

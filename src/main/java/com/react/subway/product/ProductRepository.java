package com.react.subway.product;

import com.react.subway.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "select * from product", nativeQuery = true)
    List<Product> findProductByAll();

}

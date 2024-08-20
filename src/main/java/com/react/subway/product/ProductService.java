package com.react.subway.product;

import com.react.subway.entity.Product;
import com.react.subway.menu.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProductByAll() {
        return productRepository.findProductByAll();
    }
}

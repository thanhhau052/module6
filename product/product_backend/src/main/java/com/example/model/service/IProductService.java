package com.example.model.service;

import com.example.model.entity.Category;
import com.example.model.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService extends IGeneralService<Product> {
    Page<Product> findAllByNameContaining(String name, Pageable pageable);
    Iterable<Product> findAllByProvince(Category category);
    Page<Product> findAll(Pageable pageable);
}
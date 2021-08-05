package com.example.model.service.impl;

import com.example.model.entity.Category;
import com.example.model.entity.Product;
import com.example.model.repository.ProductRepository;
import com.example.model.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public Product save(Product product) {
      return   productRepository.save(product);
    }

    @Override
    public void remove(Integer id) {
        productRepository.findById(id);
    }
//    @Override
//    public Page<Product> findAllByNameContaining(String name, Pageable pageable) {
//        return productRepository.findByNameContaining(name, pageable);
//    }

    @Override
    public Page<Product> findAllByNameContaining(String name, Pageable pageable) {
        return null;
    }

    @Override
    public Iterable<Product> findAllByProvince(Category category) {
        return productRepository.findAll();
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
}

package com.example.model.service;

import com.example.model.entity.BenhAn;

import java.util.List;

public interface IBenhAnService {
    List<BenhAn> findAll();

    BenhAn findById(Integer id);

    void save(BenhAn benhAn);

    void remove(Integer id);

}
package com.example.model.service;


import com.example.model.entity.BenhAn;
import com.example.model.repository.BenhAnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    BenhAnRepository benhAnRepository;

    @Override
    public List<BenhAn> findAll() {
        return benhAnRepository.findAll();
    }

    @Override
    public BenhAn findById(Integer id) {
        return benhAnRepository.findById(id).orElse(null);
    }

    @Override
    public void save(BenhAn benhAn) {
        benhAnRepository.save(benhAn);
    }

    @Override
    public void remove(Integer id) {

    }


}
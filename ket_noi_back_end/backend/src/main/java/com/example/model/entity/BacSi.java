package com.example.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;
@Entity
public class BacSi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String ten;
    @JsonBackReference
    @OneToMany(mappedBy = "bacSi")
    private List<BenhAn> benhAnList;

    public BacSi() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public List<BenhAn> getBenhAnList() {
        return benhAnList;
    }

    public void setBenhAnList(List<BenhAn> benhAnList) {
        this.benhAnList = benhAnList;
    }
}

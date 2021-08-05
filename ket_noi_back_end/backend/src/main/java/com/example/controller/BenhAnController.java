package com.example.controller;



import com.example.model.entity.BenhAn;
import com.example.model.service.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@Controller
@CrossOrigin(origins = "http://localhost:4200/")
public class BenhAnController {
    @Autowired
    IBenhAnService benhAnService;
    @GetMapping("/")
    public ResponseEntity<List<BenhAn>> showBenhAn(){
        List<BenhAn> benhAnList=benhAnService.findAll();
        if(benhAnList.isEmpty()){
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(benhAnList,HttpStatus.OK);
        }
    }
}
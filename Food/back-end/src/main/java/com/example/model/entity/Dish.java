package com.example.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer dishId;
    private String dishName;
    private boolean flag = true;
    private int dishPrice;
    private String dishImg;
    private String dishDescription;
    private double rate;
    @ManyToOne
    @JoinColumn(name = "dish_type_id", referencedColumnName = "dish_type_id")
    private DishType dishType;
}

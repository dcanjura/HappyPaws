package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Pets")

@Getter @Setter
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_pet")
    private long ID;

    private String Name;
    private String Type;
    private String Breed;
    private String Age;

    public Pet(){
    }

    public Pet(String name, String type, String breed, String age) {
        this.ID = ID;
        Name = name;
        Type = type;
        Breed = breed;
        Age = age;
    }
}

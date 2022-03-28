package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "donations")
@Getter @Setter
public class Donation{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_donation")
    private long ID;

    private Double Amount;
    private long ID_user;

    public Donation(){ super(); }

    public Donation(long ID, Double amount, long ID_user) {
        this.ID = ID;
        Amount = amount;
        this.ID_user = ID_user;
    }
}
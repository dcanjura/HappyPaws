package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "Adoption")
@Getter @Setter
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_adoption")
    private Long ID;

    private LocalDate Date = LocalDate.now();
    private long ID_user;

    public Adoption(){ super(); }

    public Adoption(Long ID, LocalDate date, long ID_user) {
        this.ID = ID;
        Date = date;
        this.ID_user = ID_user;
    }
}

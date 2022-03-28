package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "feedback")
@Getter @Setter
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_feedback")
    private long ID;

    private String Comment;
    private Date Date;
    private long ID_user;

    public Feedback(){
        super();
    }

    public Feedback(long ID, String comment, java.sql.Date date, long ID_user) {
        this.ID = ID;
        Comment = comment;
        Date = date;
        this.ID_user = ID_user;
    }
}

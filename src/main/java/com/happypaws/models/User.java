package com.happypaws.models;

import com.happypaws.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
@Table(name = "User")

@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private long ID;

    @Column(name = "Name")
    private String name;
    @Column(name = "DUI")
    private String DUI;
    @Column(name = "Username")
    private String userName;
    @Column(name = "Password")
    private String password;
    @Column(name = "Email")
    private String email;
    @Column(name = "type_user")
    private String typeUser;

    public User(){ super(); }

    public User(String name, String DUI, String username, String password, String email, String typeUser) {
        this.name = name;
        this.DUI = DUI;
        this.userName = username;
        this.password = password;
        this.email = email;
        this.typeUser = typeUser;
    }

//    public User getUserbyId(int id) {
//        return
//    }
}

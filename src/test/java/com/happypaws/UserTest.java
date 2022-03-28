package com.happypaws;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

@DataJpaTest
public class UserTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void testCreateUser(){
        User user = new User();


        userRepository.findAll();
    }
}

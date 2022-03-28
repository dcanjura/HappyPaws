package com.happypaws.pojo;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

//    public User getUserbyId(int id) {
//        return userRepository.findOne(id);
//    }
}

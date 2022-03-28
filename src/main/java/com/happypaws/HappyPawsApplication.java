package com.happypaws;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@EnableJpaRepositories(basePackages = "com.happypaws.repository")
@SpringBootApplication
@RestController
public class HappyPawsApplication implements CommandLineRunner{

    public static void main(String[] args) {

        SpringApplication.run(HappyPawsApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        /*this.userRepository.save(new User("Rolin", "06137566-9", "razmit", "1234", "rolin@yeet.com", "Admin"));
        this.userRepository.save(new User("El Pepe", "0698666-7", "ElPepe", "12345", "pepe@yeet.com", "Admin"));
        this.userRepository.save(new User("Ete Sech", "06137599-5", "EteSech", "123456", "sech@yeet.com", "Admin"));*/
    }

//    public User getUserbyId(int id) {
//        return userRepository.findOne(id);
//    }
}

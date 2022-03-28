package com.happypaws.controllers;

import com.happypaws.models.Adoption;
import com.happypaws.models.User;
import com.happypaws.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class AdoptionController {

    @Autowired
    private AdoptionRepository adoptionRepository;

    @GetMapping("/adoption")
    public List<Adoption> getAllAdoptions(){ return adoptionRepository.findAll(); }

    @GetMapping("/Adoption/{id}")
    public Optional<Adoption> getAdoption(@PathVariable("id") long idAdoption){ return adoptionRepository.findById(idAdoption); }

    @PostMapping("/adoption")
    public Adoption saveAdoption(@RequestBody Adoption adoption){ return adoptionRepository.save(adoption); }

    @PutMapping("/adoption")
    public Adoption updateAdoption(@RequestBody Adoption adoption){ return adoptionRepository.save(adoption); }

    @DeleteMapping("/adoption/{id}")
    public void deleteAdoption(@PathVariable("id") long idAdoption){ adoptionRepository.deleteById(idAdoption); }

}

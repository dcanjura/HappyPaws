package com.happypaws.controllers;


import com.happypaws.models.Pet;
import com.happypaws.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping("/pets")
    public List<Pet> getAllPets(){ return petRepository.findAll(); }

    @GetMapping("/pets/{id}")
    public Optional<Pet> getPet(@PathVariable("id") long idPet){ return petRepository.findById(idPet); }

    @PostMapping("/pets/newPet")
    public Pet savePet(@RequestBody Pet pet){ return petRepository.save(pet); }

    @PutMapping("/pets/updatePet")
    public Pet updatePet(@RequestBody Pet pet){ return petRepository.save(pet); }

    @DeleteMapping("/pets/{id}")
    public void deletePet(@PathVariable("id") long idPet){ petRepository.deleteById(idPet); }
}

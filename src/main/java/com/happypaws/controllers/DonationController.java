package com.happypaws.controllers;

import com.happypaws.models.Donation;
import com.happypaws.models.User;
import com.happypaws.repository.DonationRepository;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;

    @GetMapping("/donation")
    public List<Donation> getAllDonations(){ return donationRepository.findAll(); }

    @GetMapping("/donation/{id}")
    public Optional<Donation> getDonation(@PathVariable("id") long idDonation){ return donationRepository.findById(idDonation); }

    @PostMapping("/donation")
    public Donation saveDonation(@RequestBody Donation donation){ return donationRepository.save(donation); }

    @PutMapping("/donation")
    public Donation updateDonation(@RequestBody Donation donation){ return donationRepository.save(donation); }

    @DeleteMapping("/donation/{id}")
    public void deleteDonation(@PathVariable("id") long idDonation){ donationRepository.deleteById(idDonation); }

}


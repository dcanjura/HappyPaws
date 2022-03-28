package com.happypaws.controllers;

import com.happypaws.models.Feedback;
import com.happypaws.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback(){ return feedbackRepository.findAll(); }

    @GetMapping("/feedback/{id}")
    public Optional<Feedback> getFeedback(@PathVariable("id") long idFeed){ return feedbackRepository.findById(idFeed); }

    @PostMapping("/feedback")
    public Feedback saveFeed(@RequestBody Feedback feed){ return feedbackRepository.save(feed); }

    @PutMapping("/feedback")
    public Feedback updateFeed(@RequestBody Feedback feed){ return feedbackRepository.save(feed); }

    @DeleteMapping("/feedback/{id}")
    public void deleteFeed(@PathVariable("id") long idFeed){ feedbackRepository.deleteById(idFeed); }
}
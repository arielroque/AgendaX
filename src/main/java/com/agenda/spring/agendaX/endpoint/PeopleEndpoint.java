package com.agenda.spring.agendaX.endpoint;

import com.agenda.spring.agendaX.model.People;
import com.agenda.spring.agendaX.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("people")
public class PeopleEndpoint {

    private PeopleRepository peopleDAO;

    @Autowired
    public PeopleEndpoint(PeopleRepository peopleDAO) {
        this.peopleDAO = peopleDAO;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody People people) {

        peopleDAO.save(people);

        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping(path = "{id}")
    public ResponseEntity<?> get(@PathVariable("id") int id) {

        if (peopleDAO.existsById(id)) {
            return new ResponseEntity<>(peopleDAO.findById(id), HttpStatus.OK);
        }

        return new ResponseEntity<>("User not found", HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<?> getAllContacts() {
        return new ResponseEntity<>(peopleDAO.findAll(), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateContact(@RequestBody People p) {

        peopleDAO.save(p);

        return new ResponseEntity<>(HttpStatus.OK);

    }

    @DeleteMapping
    public ResponseEntity<?> deleteContact(@PathVariable("{id}") int id) {

        peopleDAO.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);


    }
}

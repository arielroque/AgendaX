package com.agenda.spring.agendaX.endpoint;

import com.agenda.spring.agendaX.model.Contact;
import com.agenda.spring.agendaX.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("contact")
public class ContactEndpoint {

    private ContactRepository peopleDAO;

    @Autowired
    public ContactEndpoint(ContactRepository peopleDAO) {
        this.peopleDAO = peopleDAO;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Contact contact) {

        peopleDAO.save(contact);

        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping(path = "{id}")
    public ResponseEntity<?> get(@PathVariable("id") int id) {

        if (peopleDAO.existsById(id)) {
            return new ResponseEntity<>(peopleDAO.findById(id), HttpStatus.OK);
        }

        return new ResponseEntity<>("User not found", HttpStatus.OK);
    }

    @GetMapping(path = "/findByName/{name}")
    public ResponseEntity<?> findContactsByName (@PathVariable("name") String name){

        return new ResponseEntity<>(peopleDAO.findByNameIgnoreCaseContaining(name),HttpStatus.OK);
    }

    @GetMapping(path = "/findByRelation/{relation}")
    public ResponseEntity<?>findContactByRelation(@PathVariable("relation")String relation){

        return new ResponseEntity<>(peopleDAO.findByRelationIgnoreCaseContaining(relation),HttpStatus.OK);
    }

    @GetMapping(path = "/findByPhone/{phone}")
    public ResponseEntity<?>findContactByPhone(@PathVariable("phone")String phone){

        return new ResponseEntity<>(peopleDAO.findByPhoneIgnoreCaseContaining(phone),HttpStatus.OK);
    }



    @GetMapping()
    public ResponseEntity<?> getAllContacts() {
        return new ResponseEntity<>(peopleDAO.findAll(), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateContact(@RequestBody Contact p) {

        peopleDAO.save(p);

        return new ResponseEntity<>(HttpStatus.OK);

    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> deleteContactById(@PathVariable("id") int id){

        peopleDAO.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);

    }
}

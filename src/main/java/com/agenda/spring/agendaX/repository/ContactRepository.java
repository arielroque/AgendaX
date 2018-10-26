package com.agenda.spring.agendaX.repository;


import com.agenda.spring.agendaX.model.Contact;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ContactRepository extends CrudRepository<Contact,Integer> {

    List<Contact> findByNameIgnoreCaseContaining(String name);
}

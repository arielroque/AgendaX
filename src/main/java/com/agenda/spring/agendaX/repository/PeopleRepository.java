package com.agenda.spring.agendaX.repository;


import com.agenda.spring.agendaX.model.People;
import org.springframework.data.repository.CrudRepository;

public interface PeopleRepository extends CrudRepository<People,Integer> {
}

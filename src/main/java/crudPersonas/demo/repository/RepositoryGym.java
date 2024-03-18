package crudPersonas.demo.repository;

import crudPersonas.demo.model.Gym;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepositoryGym extends JpaRepository<Gym, Integer> {

}

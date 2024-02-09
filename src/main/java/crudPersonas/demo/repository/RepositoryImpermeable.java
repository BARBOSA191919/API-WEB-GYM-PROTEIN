package crudPersonas.demo.repository;

import crudPersonas.demo.model.Impermeable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepositoryImpermeable extends JpaRepository<Impermeable, Integer> {

}

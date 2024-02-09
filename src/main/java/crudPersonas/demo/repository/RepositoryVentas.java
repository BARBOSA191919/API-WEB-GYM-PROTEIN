package crudPersonas.demo.repository;

import crudPersonas.demo.model.Ventas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RepositoryVentas extends JpaRepository<Ventas, Integer> {

}

package crudPersonas.demo.repository;

import crudPersonas.demo.model.RegistroActividad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryRegistroActividad extends JpaRepository<RegistroActividad, Integer> {
}

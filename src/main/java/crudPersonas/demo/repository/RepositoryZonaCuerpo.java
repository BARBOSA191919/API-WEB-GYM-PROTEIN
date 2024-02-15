package crudPersonas.demo.repository;

import crudPersonas.demo.model.ZonaCuerpo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryZonaCuerpo extends JpaRepository<ZonaCuerpo, Integer> {
}

package  crudPersonas.demo.repository;

import  crudPersonas.demo.model.DiaSemana;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryDiaSemana extends JpaRepository<DiaSemana, Integer> {
//get = capturar datos
// post = enviar datos
}

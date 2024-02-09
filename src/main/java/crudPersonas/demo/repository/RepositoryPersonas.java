package crudPersonas.demo.repository;
// Importa las clases necesarias de Spring y del modelo

import crudPersonas.demo.model.Personas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Anota la interfaz como un componente de repositorio de Spring
@Repository
// Extiende la interfaz JpaRepository, indicando que trabaja con entidades de tipo Personas y utiliza claves primarias de tipo Integer
public interface RepositoryPersonas extends JpaRepository<Personas, Integer> {

    // Esta interfaz define un repositorio de Spring Data JPA para la entidad Personas,
    // permitiendo realizar operaciones comunes de acceso a datos de forma sencilla y eficiente.
    // Esta interfaz proporciona métodos para realizar operaciones CRUD (Create, Read, Update, Delete)
    // en la entidad Personas. La entidad es de tipo Personas y la clave primaria es de tipo Integer.
    // Se indica que la clave primaria de la entidad Personas es un número entero.
    //n Spring Data JPA. Spring Data JPA es una parte del framework Spring que simplifica el acceso a datos
    // en aplicaciones Java basadas en el framework de persistencia Java Persistence API (JPA).
}



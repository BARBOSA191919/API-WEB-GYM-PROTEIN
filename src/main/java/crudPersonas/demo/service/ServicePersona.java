package crudPersonas.demo.service;

// Importa las clases necesarias de Spring y del modelo

import crudPersonas.demo.interfaceService.IPersonaService;
import crudPersonas.demo.model.Personas;
import crudPersonas.demo.repository.RepositoryPersonas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// Anota la clase como un servicio de Spring
@Service
// Implementa la interfaz IPersonaService, que define los métodos de servicio para la entidad Personas

public class ServicePersona implements IPersonaService  {

    // Anota la propiedad repositoryPersonas con @Autowired, indicando que debe ser inyectada por Spring
    @Autowired

    private RepositoryPersonas repositoryPersonas;

    // Implementación del método listar de la interfaz IPersonaService

    @Override
    public List<Personas> listar() {
        // Utiliza el método findAll del repositorio para obtener la lista de todas las personas

        return (List<Personas>) repositoryPersonas.findAll();
    }


    // Implementación del método listId de la interfaz IPersonaService
    @Override
    public Optional<Personas> listId(int id) {
        // Utiliza el método findById del repositorio para obtener una persona por su ID

        return repositoryPersonas.findById(id);
    }

    // Implementación del método save de la interfaz IPersonaService
    @Override
    public int save(Personas p ) {
        int res = 0;
        // Utiliza el método save del repositorio para guardar una persona
        Personas persona = repositoryPersonas.save(p);
        // Verifica si la operación de guardado fue exitosa
        if (!persona.equals(null)) {
            res = 1;
        }
        // Retorna el resultado de la operación (1 si fue exitosa, 0 si no)
        return res;
    }

    @Override
    // Implementación de un método adicional para obtener una persona por su ID
    public void delete(int id) {
        repositoryPersonas.deleteById(id);
    }
    // Utiliza el método findById del repositorio y orElse para manejar el caso de que no se encuentre la persona

    public Personas getById(int id) {
        Optional<Personas> optionalPersona = repositoryPersonas.findById(id);
        return optionalPersona.orElse(null);
    }

}




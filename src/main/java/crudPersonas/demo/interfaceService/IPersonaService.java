package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.Personas;

import java.util.List;
import java.util.Optional;

public interface IPersonaService {

    // Método para obtener una lista de todas las personas
    public List<Personas> listar();

    // Método para obtener una persona por su ID, devuelve un Optional que puede ser nulo
    public Optional<Personas> listId(int id);

    // Método para guardar o actualizar una persona, devuelve un entero que puede representar un identificador
    public int save(Personas p);

    // Método para eliminar una persona por su ID
    public void delete(int id);

    // Método para obtener una persona por su ID
    public Personas getById(int id);
}

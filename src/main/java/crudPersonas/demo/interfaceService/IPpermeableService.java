package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.Impermeable;

import java.util.List;
import java.util.Optional;

public interface IPpermeableService {

    public List<Impermeable> listar2();

    public Optional<Impermeable> listId(int id);

    public int save (Impermeable i);

    public void delete(int id);

    public Impermeable getById(int id); // Método para obtener una persona por su correo

}

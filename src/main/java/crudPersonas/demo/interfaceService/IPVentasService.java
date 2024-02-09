package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.Ventas;
import java.util.List;
import java.util.Optional;

public interface IPVentasService {

    public List<Ventas> listar3();

    public Optional<Ventas> listId(int id);

    public int save (Ventas i);

    public void delete(int id);

    public Ventas getById(int id); // Método para obtener una persona por su id

}

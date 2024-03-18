package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.Gym;

import java.util.List;
import java.util.Optional;

public interface IPgymService {

    public List<Gym> listar2();

    public Optional<Gym> listId(int id);

    public int save (Gym i);

    public void delete(int id);

    public Gym getById(int id); // Método para obtener una persona por su correo

}

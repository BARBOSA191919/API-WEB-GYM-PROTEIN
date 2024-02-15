package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.RegistroActividad;

import java.util.List;
import java.util.Optional;

public interface IRegistroActividadService {
    public List<RegistroActividad> listarRegistroActividad();
    public Optional<RegistroActividad> listIdRegistroActividad(int id);
    public int saveRegistroActividad (RegistroActividad actividad);

    boolean actualizarRegistroActividad(int id, RegistroActividad actividad);
    public void deleteRegistroActividad(int id);
}

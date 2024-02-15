package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.Ejercicios;
import java.util.List;
import java.util.Optional;

public interface IEjerciciosService {

    public List<Ejercicios> listarEjercicios();
    public Optional<Ejercicios> listIdEjercicios(int id);
    public int saveEjercicios(Ejercicios ejercicio);
    public void deleteEjercicios(int id);

    boolean actualizarEjercicios(int id, Ejercicios ejercicio);
    boolean actualizarDia(int id, int dia);
}

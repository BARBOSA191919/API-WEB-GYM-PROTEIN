package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IEjerciciosService;
import crudPersonas.demo.model.Ejercicios;
import crudPersonas.demo.repository.RepositoryEjercicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceEjercicios implements IEjerciciosService {

    @Autowired
    private RepositoryEjercicios repositoryEjercicios;

    @Override
    public List<Ejercicios> listarEjercicios(){return (List<Ejercicios>) repositoryEjercicios.findAll();}

    @Override
    public Optional<Ejercicios> listIdEjercicios(int id){ return repositoryEjercicios.findById(id);}

    @Override
    public int saveEjercicios(Ejercicios e){
        int res =0;
        Ejercicios ejercicio = repositoryEjercicios.save(e);
        if(!ejercicio.equals(null)){
            res = 1;
        }
        return res;
    }

    @Override
    public void deleteEjercicios(int id){repositoryEjercicios.deleteById(id);}

    @Override
    public boolean actualizarEjercicios(int id, Ejercicios ejercicio) {
        Optional<Ejercicios> existingEjercicios = repositoryEjercicios.findById(id);
        if (existingEjercicios.isPresent()) {
            Ejercicios updatedEjercicios = existingEjercicios.get();

            updatedEjercicios.setDescripcion(ejercicio.getDescripcion());
            updatedEjercicios.setNombre(ejercicio.getNombre());
            updatedEjercicios.setIdDiaSemana(ejercicio.getIdDiaSemana());
            updatedEjercicios.setIdZonaCuerpo(ejercicio.getIdZonaCuerpo());

            repositoryEjercicios.save(updatedEjercicios);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean actualizarDia(int id, int dia) {
        Optional<Ejercicios> existingEjercicios = repositoryEjercicios.findById(id);
        if (existingEjercicios.isPresent()) {
            Ejercicios updatedEjercicios = existingEjercicios.get();

            updatedEjercicios.setIdDiaSemana(dia);

            repositoryEjercicios.save(updatedEjercicios);
            return true;
        } else {
            return false;
        }
    }
}

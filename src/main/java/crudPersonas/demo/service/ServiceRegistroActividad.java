package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IRegistroActividadService;
import crudPersonas.demo.model.RegistroActividad;
import crudPersonas.demo.repository.RepositoryRegistroActividad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceRegistroActividad implements IRegistroActividadService {


    @Autowired
    private RepositoryRegistroActividad repositoryRegistroActividad;

    @Override
    public List<RegistroActividad> listarRegistroActividad(){return (List<RegistroActividad>) repositoryRegistroActividad.findAll();}

    @Override
    public Optional<RegistroActividad> listIdRegistroActividad(int id) {
        return repositoryRegistroActividad.findById(id);
    }


    @Override
    public int saveRegistroActividad(RegistroActividad r){
        int res =0;
        RegistroActividad actividad = repositoryRegistroActividad.save(r);
        if(!actividad.equals(null)){
            res = 1;
        }
        return res;
    }

    @Override
    public boolean actualizarRegistroActividad(int id, RegistroActividad actividad) {
        Optional<RegistroActividad> existingRegistroActividad = repositoryRegistroActividad.findById(id);
        if (existingRegistroActividad.isPresent()) {
            RegistroActividad updatedRegistroActividad = existingRegistroActividad.get();

            updatedRegistroActividad.setEstado(actividad.getEstado());
            updatedRegistroActividad.setFecha(actividad.getFecha());
            updatedRegistroActividad.setIdEjercicio(actividad.getIdEjercicio());
            updatedRegistroActividad.setTiempoTotal(actividad.getTiempoTotal());
            updatedRegistroActividad.setIdDiaSemana(actividad.getIdDiaSemana());


            repositoryRegistroActividad.save(updatedRegistroActividad);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void deleteRegistroActividad(int id){repositoryRegistroActividad.deleteById(id);}
}

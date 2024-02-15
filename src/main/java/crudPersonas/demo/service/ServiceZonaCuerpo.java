package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IZonaCuerpoService;
import crudPersonas.demo.model.ZonaCuerpo;
import crudPersonas.demo.repository.RepositoryZonaCuerpo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceZonaCuerpo implements IZonaCuerpoService {

    @Autowired
    private RepositoryZonaCuerpo repositoryZonaCuerpo;

    @Override
    public List<ZonaCuerpo> listarZonaCuerpo(){return (List<ZonaCuerpo>) repositoryZonaCuerpo.findAll();}

    @Override
    public Optional<ZonaCuerpo> listIdZonaCuerpo(int id){ return repositoryZonaCuerpo.findById(id);}

    @Override
    public int saveZonaCuerpo(ZonaCuerpo p){
        int res =0;
        ZonaCuerpo prioridad = repositoryZonaCuerpo.save(p);
        if(!prioridad.equals(null)){
            res = 1;
        }
        return res;
    }

    @Override
    public boolean actualizarZonaCuerpo(int id, ZonaCuerpo zona) {
        Optional<ZonaCuerpo> existingZonaCuerpo = repositoryZonaCuerpo.findById(id);
        if (existingZonaCuerpo.isPresent()) {
            ZonaCuerpo updatedZonaCuerpo = existingZonaCuerpo.get();

            updatedZonaCuerpo.setNombre(zona.getNombre());
            updatedZonaCuerpo.setEjercicios(zona.getEjercicios());

            repositoryZonaCuerpo.save(updatedZonaCuerpo);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void deleteZonaCuerpo(int id){repositoryZonaCuerpo.deleteById(id);}
}

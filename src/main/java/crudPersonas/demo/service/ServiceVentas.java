package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IPVentasService;
import crudPersonas.demo.model.Ventas;
import crudPersonas.demo.repository.RepositoryVentas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceVentas implements IPVentasService {

    @Autowired
    private RepositoryVentas repositoryVentas;
    @Override
    public List<Ventas> listar3() {
        return (List<Ventas>) repositoryVentas.findAll();
    }

    @Override
    public Optional<Ventas> listId(int id) {
        return repositoryVentas.findById(id);
    }

    @Override
    public int save(Ventas i) {
        int res = 0;
        Ventas ventas = repositoryVentas.save(i);
        if (!ventas.equals(null)) {
            res = 1;
        }
        return res;
    }
    @Override
    public void delete(int id) {
        repositoryVentas.deleteById(id);
    }
    public Ventas getById(int id) {
        Optional<Ventas> optionalVentas = repositoryVentas.findById(id);
        return optionalVentas.orElse(null);
    }
}

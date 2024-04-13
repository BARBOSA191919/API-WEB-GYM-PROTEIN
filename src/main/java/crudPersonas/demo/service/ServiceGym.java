package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IPgymService;
import crudPersonas.demo.model.Gym;
import crudPersonas.demo.repository.RepositoryGym;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class ServiceGym implements IPgymService {

    @Autowired
    private RepositoryGym repositoryGym;
    @Override
    public List<Gym> listar2() {
        return (List<Gym>) repositoryGym.findAll();
    }

    @Override
    public Optional<Gym> listId(int id) {
        return repositoryGym.findById(id);
    }

    @Override
    public int save(Gym i) {
        int res = 0;
        Gym impermeable = repositoryGym.save(i);
        if (!impermeable.equals(null)) {
            res = 1;
        }
        return res;
    }
    @Override
    public void delete(int id) {
        repositoryGym.deleteById(id);
    }
    public Gym getById(int id) {
        Optional<Gym> optionalImpermeable = repositoryGym.findById(id);
        return optionalImpermeable.orElse(null);
    }
}

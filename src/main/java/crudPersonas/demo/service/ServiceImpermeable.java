package crudPersonas.demo.service;

import crudPersonas.demo.interfaceService.IPpermeableService;
import crudPersonas.demo.model.Impermeable;
import crudPersonas.demo.repository.RepositoryImpermeable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ServiceImpermeable implements IPpermeableService {

    @Autowired
    private RepositoryImpermeable repositoryImpermeable;
    @Override
    public List<Impermeable> listar2() {
        return (List<Impermeable>) repositoryImpermeable.findAll();
    }

    @Override
    public Optional<Impermeable> listId(int id) {
        return repositoryImpermeable.findById(id);
    }

    @Override
    public int save(Impermeable i) {
        int res = 0;
        Impermeable impermeable = repositoryImpermeable.save(i);
        if (!impermeable.equals(null)) {
            res = 1;
        }
        return res;
    }
    @Override
    public void delete(int id) {
        repositoryImpermeable.deleteById(id);
    }
    public Impermeable getById(int id) {
        Optional<Impermeable> optionalImpermeable = repositoryImpermeable.findById(id);
        return optionalImpermeable.orElse(null);
    }
}

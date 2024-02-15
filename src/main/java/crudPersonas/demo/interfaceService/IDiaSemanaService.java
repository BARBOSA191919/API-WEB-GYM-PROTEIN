package crudPersonas.demo.interfaceService;

import crudPersonas.demo.model.DiaSemana;

import java.util.List;
import java.util.Optional;

public interface IDiaSemanaService {

    public List<DiaSemana> listarDiaSemana();

    public Optional<DiaSemana> listIdDiaSemana(int id);
    public int saveDiaSemana (DiaSemana DiaSemana);

    public boolean actualizarDiaSemana(int id, DiaSemana dia);
    public void deleteDiaSemana(int id);

}

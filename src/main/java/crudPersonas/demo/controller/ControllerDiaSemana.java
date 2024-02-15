package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IDiaSemanaService;
import crudPersonas.demo.model.DiaSemana;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/diaSemana")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ControllerDiaSemana {

    @Autowired
    private IDiaSemanaService iDiaSemanaService;

    @GetMapping("/listar")
    public List<DiaSemana> listarDiaSemana() {
        List<DiaSemana> dia = iDiaSemanaService.listarDiaSemana();
        return dia;
    }

    @GetMapping("/listar/{id}")
    public Optional<DiaSemana> listarDiaSemana(@PathVariable int id) {
        Optional<DiaSemana> dia = iDiaSemanaService.listIdDiaSemana(id);
        return dia;
    }

    @PostMapping("/crear")
    public int crearDiaSemana(@RequestBody DiaSemana dia) {
        int newDiaSemana = iDiaSemanaService.saveDiaSemana(dia);
        System.out.println("creado usuario");
        return newDiaSemana;
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarDiaSemana(@PathVariable int id) {
        iDiaSemanaService.deleteDiaSemana(id);
        return ResponseEntity.ok("DiaSemana eliminada exitosamente");
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<String> actualizarDiaSemana(@PathVariable int id, @RequestBody DiaSemana dia) {
        boolean existingDiaSemana = iDiaSemanaService.actualizarDiaSemana(id, dia);

        if (existingDiaSemana) {

            return ResponseEntity.ok("Tarea actualizada exitosamente");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

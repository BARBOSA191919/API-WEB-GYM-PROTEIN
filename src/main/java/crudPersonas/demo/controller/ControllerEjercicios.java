package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IEjerciciosService;
import crudPersonas.demo.model.Ejercicios;
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
@RequestMapping("/ejercicio")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ControllerEjercicios {

    @Autowired
    private IEjerciciosService iEjerciciosServices;

    @GetMapping("/listar")
    public List<Ejercicios> listarEjercicios(){
        List<Ejercicios> ejercicio = iEjerciciosServices.listarEjercicios();
        return ejercicio;
    }

    @GetMapping("/listar/{id}")
    public Optional<Ejercicios> listarEjerciciosId(@PathVariable int id){
        Optional<Ejercicios> ejercicio = iEjerciciosServices.listIdEjercicios(id);
        return ejercicio;
    }

    @PostMapping("/crear")
    public int crearEjercicios(@RequestBody Ejercicios ejercicio) {
        int newEjercicios = iEjerciciosServices.saveEjercicios(ejercicio);
        return newEjercicios;
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarEjercicios(@PathVariable int id) {
        iEjerciciosServices.deleteEjercicios(id);
        return ResponseEntity.ok("Ejercicios eliminada exitosamente");
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<String> actualizarEjercicios(@PathVariable int id, @RequestBody Ejercicios ejercicio) {
        boolean ejercicioUpdate = iEjerciciosServices.actualizarEjercicios(id, ejercicio);
        if (ejercicioUpdate) {
            return ResponseEntity.ok("Ejercicios actualizada exitosamente");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/actualizarDia/{id}/{dia}")
    public ResponseEntity<String> actualizarDia(@PathVariable int id, @PathVariable int dia) {
        boolean ejercicioUpdate = iEjerciciosServices.actualizarDia(id, dia);
        if (ejercicioUpdate) {
            return ResponseEntity.ok("Ejercicios actualizada exitosamente");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

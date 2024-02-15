package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IZonaCuerpoService;
import crudPersonas.demo.model.ZonaCuerpo;
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
@RequestMapping("/zonaCuerpo")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ControllerZonaCuerpo {

    @Autowired
    private IZonaCuerpoService iZonaCuerpoService;

    @GetMapping("/listar")
    public List<ZonaCuerpo> listarZonaCuerpo() {
        List<ZonaCuerpo> zona = iZonaCuerpoService.listarZonaCuerpo();
        return zona;
    }

    @GetMapping("/listar/{id}")
    public Optional<ZonaCuerpo> listarZonaCuerpoId(@PathVariable int id) {
        Optional<ZonaCuerpo> zona = iZonaCuerpoService.listIdZonaCuerpo(id);
        return zona;
    }

    @PostMapping("/crear")
    public int crearZonaCuerpo(@RequestBody ZonaCuerpo zona) {
        int newZonaCuerpo = iZonaCuerpoService.saveZonaCuerpo(zona);
        System.out.println("zona creada");
        return newZonaCuerpo;
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarZonaCuerpo(@PathVariable int id) {
        iZonaCuerpoService.deleteZonaCuerpo(id);
        return ResponseEntity.ok("ZonaCuerpo eliminada exitosamente");
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<String> actualizarZonaCuerpo(@PathVariable int id, @RequestBody ZonaCuerpo zona) {
        Boolean existingZonaCuerpo = iZonaCuerpoService.actualizarZonaCuerpo(id, zona);

        if (existingZonaCuerpo) {
            return ResponseEntity.ok("ZonaCuerpo actualizada exitosamente");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

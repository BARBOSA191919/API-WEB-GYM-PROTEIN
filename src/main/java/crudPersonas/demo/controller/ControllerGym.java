package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IPgymService;
import crudPersonas.demo.model.Gym;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;


@Controller
@RequestMapping
public class ControllerGym {

    @Autowired
    private IPgymService gymService;

    @GetMapping("/listar2")
    public String listar2(Model model) {
        List<Gym> gym = gymService.listar2();
        model.addAttribute("gym", gym);
        return "index2";
    }

    @GetMapping("eliminar12/{id}")
    public String deletes(@PathVariable int id) {
        gymService.delete(id);
        return "redirect:/listar2";
    }

    @PostMapping("/saves")
    public String saves(@Validated Gym i) {
        gymService.save(i);
        return "redirect:/gym";
    }

    @GetMapping("/editar12/{id}")
    public String editars(@PathVariable int id, Model model) {
        Gym gym = gymService.getById(id);
        model.addAttribute("gym", gym);
        return "login";
    }

    @PostMapping("/editar12")
    public String editarGym(@Validated Gym gym) {
        gymService.save(gym);
        return "redirect:/listar2";
    }

    @GetMapping("/nuevo1")
    public String agregarlogin(Model model) {
        model.addAttribute("gym", new Gym());
        return "login";
    }

    @GetMapping("/iniciar")
    public String agregarinicio(Model model) {
        model.addAttribute("gym", new Gym());
        return "login";
    }
    @GetMapping("/entrenamiento")
    public String agregarentrenamiento(Model model) {
        model.addAttribute("iRegistroActividadService", new Gym());
        return "index4";
    }

    // Declara un método público llamado agregarrecomendaciones que maneja solicitudes GET a la ruta "/recomendaciones"
    @GetMapping("/recomendaciones")
    public String agregarrecomendaciones(Model model) {
        // Agrega un atributo al modelo con el nombre "iRegistroActividadService" y un nuevo objeto de la clase Gym
        model.addAttribute("iRegistroActividadService", new Gym());
        // Retorna una redirección a la URL "http://localhost:4200/login"
        return "redirect:http://localhost:4200/login";
    }
}
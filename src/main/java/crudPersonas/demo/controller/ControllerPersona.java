package crudPersonas.demo.controller;
import crudPersonas.demo.model.Personas;
import org.springframework.ui.Model;
import crudPersonas.demo.interfaceService.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Indica que esta clase es un controlador Spring
@Controller
// Define la ruta base para todas las solicitudes en este controlador
@RequestMapping
public class ControllerPersona {

    // Inyecta la dependencia del servicio de personas utilizando Autowired
    @Autowired
    private IPersonaService personaService;

    // Maneja solicitudes GET a "/listar"
    @GetMapping("/listar")
    // Mapea el modelo con la vista "index" y devuelve el nombre de la vista
    public String listar(Model model) {
        // Obtiene la lista de personas desde el servicio
        List<Personas> personas = personaService.listar();
        // Agrega la lista de personas al modelo para que esté disponible en la vista
        model.addAttribute("personas", personas);
        // Devuelve el nombre de la vista a la que se redirige
        return "index";
    }

    // Maneja solicitudes GET a "/impermeable"
    @GetMapping("/gym")
    // Mapea el modelo con la vista "tienda" y devuelve el nombre de la vista
    public String impermeable(Model model) {
        // Obtiene la lista de personas desde el servicio
        List<Personas> personas = personaService.listar();
        // Agrega la lista de personas al modelo para que esté disponible en la vista
        model.addAttribute("personas", personas);
        // Devuelve el nombre de la vista a la que se redirige
        return "tienda";
    }

    // Maneja solicitudes GET para eliminar una persona por su ID
    @GetMapping("eliminar/{id}")
    // Utiliza la anotación @PathVariable para vincular el valor de la variable en la URL
    public String delete(@PathVariable int id) {
        // Llama al método delete del servicio para eliminar la persona con el ID proporcionado
        personaService.delete(id);
        // Redirige a la página "/listar" después de eliminar la persona
        return "redirect:/listar";
    }

    // Maneja solicitudes POST a "/save"
    @PostMapping("/save")
    // Utiliza la anotación @Validated para realizar validación de entrada
    public String save(@Validated Personas p) {
        // Llama al método save del servicio para guardar la persona proporcionada
        personaService.save(p);
        // Redirige a la página "/iniciar" después de guardar la persona
        return "redirect:/iniciar";
    }

    // Maneja solicitudes GET a "/nuevo"
    @GetMapping("/nuevo")
    // Mapea el modelo con la vista "registro" y devuelve el nombre de la vista
    public String agregar(Model model) {
        // Agrega una nueva persona al modelo, inicializada como un objeto vacío
        model.addAttribute("persona", new Personas());
        // Devuelve el nombre de la vista a la que se redirige
        return "registro";
    }

    // Maneja solicitudes GET para editar una persona por su ID
    @GetMapping("/editar/{id}")
    // Utiliza la anotación @PathVariable para vincular el valor de la variable en la URL
    public String editar(@PathVariable int id, Model model) {
        // Obtiene la persona con el ID proporcionado desde el servicio
        Personas persona = personaService.getById(id);
        // Agrega la persona al modelo para que esté disponible en la vista
        model.addAttribute("persona", persona);
        // Devuelve el nombre de la vista a la que se redirige
        return "registro";
    }

    // Maneja solicitudes POST a "/editar"
    @PostMapping("/editar")
    // Utiliza la anotación @Validated para realizar validación de entrada
    public String editarPersona(@Validated Personas persona) {
        // Llama al método save del servicio para actualizar la persona proporcionada
        personaService.save(persona);
        // Redirige a la página "/listar" después de editar la persona
        return "redirect:/listar";
    }
}

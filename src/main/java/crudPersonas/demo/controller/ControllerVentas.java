package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IPVentasService;
import crudPersonas.demo.model.Ventas;
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
public class ControllerVentas {
    @Autowired
    private IPVentasService ventasService;

    @GetMapping("/listar3")
    public String listar3(Model model) {
        List<Ventas> ventas = ventasService.listar3();
        model.addAttribute("ventas", ventas);
        return "index3";
    }
    @GetMapping("eliminar13/{id}")
    public String deletess(@PathVariable int id) {
        ventasService.delete(id);
        return "redirect:/listar3";
    }

    @PostMapping("/save2")
    public String save2(@Validated Ventas i) {
        ventasService.save(i);
        return "redirect:/gym";
    }

    @GetMapping("/editar13/{id}")
    public String editarss(@PathVariable int id, Model model) {
        Ventas ventas = ventasService.getById(id);
        model.addAttribute("ventas", ventas);
        return "ventas";
    }

    @PostMapping("/editar13")
    public String editarVentas(@Validated Ventas ventas) {
        ventasService.save(ventas);
        return "redirect:/listar3";
    }
    @GetMapping("/nuevo2")
    public String agregarventa1(Model model) {
        model.addAttribute("ventas", new Ventas());
        return "ventas";
    }
    @GetMapping("/comprar")
    public String agregarventa(Model model) {
        model.addAttribute("ventas", new Ventas());
        return "ventas";
    }
    }





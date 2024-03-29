package crudPersonas.demo.controller;

import crudPersonas.demo.interfaceService.IPpermeableService;
import crudPersonas.demo.model.Impermeable;
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
public class ControllerImpermeable {
    @Autowired
    private IPpermeableService permeableService;

    @GetMapping("/listar2")
    public String listar2(Model model) {
        List<Impermeable> impermeable = permeableService.listar2();
        model.addAttribute("impermeable", impermeable);
        return "index2";
    }

    @GetMapping("eliminar12/{id}")
    public String deletes(@PathVariable int id) {
        permeableService.delete(id);
        return "redirect:/listar2";
    }

    @PostMapping("/saves")
    public String saves(@Validated Impermeable i) {
        permeableService.save(i);
        return "redirect:/impermeable";
    }

    @GetMapping("/editar12/{id}")
    public String editars(@PathVariable int id, Model model) {
        Impermeable impermeable = permeableService.getById(id);
        model.addAttribute("impermeable", impermeable);
        return "login";
    }

    @PostMapping("/editar12")
    public String editarImpermeable(@Validated Impermeable impermeable) {
        permeableService.save(impermeable);
        return "redirect:/listar2";
    }

    @GetMapping("/nuevo1")
    public String agregarlogin(Model model) {
        model.addAttribute("impermeable", new Impermeable());
        return "login";
    }

    @GetMapping("/iniciar")
    public String agregarinicio(Model model) {
        model.addAttribute("impermeable", new Impermeable());
        return "login";
    }


}
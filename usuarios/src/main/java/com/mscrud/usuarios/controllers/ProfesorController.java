package com.mscrud.usuarios.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscrud.usuarios.sqlite.Profesor;
import com.mscrud.usuarios.repositories.ProfesorRepository;

@RestController
@RequestMapping("/profesor")
public class ProfesorController {
    @Autowired
    private ProfesorRepository profesorRepo;

    @GetMapping("/get")
    public List<Profesor> getProfesor() {
        return profesorRepo.findAll();
    }

    @PostMapping("/post")
    public Profesor postProfesor(@RequestBody Profesor entryData){
        return profesorRepo.save(entryData);
    }
    @PutMapping("/put/{id}")
    public Profesor putProfesor(@PathVariable Integer id,
                                @RequestBody Profesor entryData){
        Profesor searchData = profesorRepo.findById(id).orElse(null);
        searchData.setName(entryData.getName());
        return profesorRepo.save(searchData);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProfesor(@PathVariable Integer id){
        profesorRepo.deleteById(id);
    }

}

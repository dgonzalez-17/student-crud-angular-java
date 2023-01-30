package com.mscrud.usuarios.controllers;
import java.util.ArrayList;
import java.util.List;

import com.mscrud.usuarios.repositories.MateriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mscrud.usuarios.sqlite.Materias;
import com.mscrud.usuarios.sqlite.Profesor;
import com.mscrud.usuarios.repositories.ProfesorRepository;

@RestController
@RequestMapping("/profesor")
public class ProfesorController {
    @Autowired
    private ProfesorRepository profesorRepo;
    @Autowired
    private MateriasRepository materiasRepo;

    @GetMapping("/get")
    public List<Profesor> getProfesor() {
        return profesorRepo.findAll();
    }

    @PostMapping("/post/{materiaId}")
    public Profesor postProfesor(@PathVariable Integer materiaId,
                                 @RequestBody Profesor entryData){
        Materias searchSubject = materiasRepo.findById(materiaId).orElse(null);
        entryData.setName(entryData.getName());
        entryData.setSubject(searchSubject);
        return profesorRepo.save(entryData);
    }
    @PutMapping("/put/{id}/{materiaId}")
    public Profesor putProfesor(@PathVariable Integer id,
                                @PathVariable Integer materiaId,
                                @RequestBody Profesor entryData){
        Profesor searchData = profesorRepo.findById(id).orElse(null);
        Materias searchSubject = materiasRepo.findById(materiaId).orElse(null);
        searchData.setName(entryData.getName());
        searchData.setSubject(searchSubject);
        return profesorRepo.save(searchData);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProfesor(@PathVariable Integer id){
        profesorRepo.deleteById(id);
    }

}

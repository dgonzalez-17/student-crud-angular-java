package com.mscrud.usuarios.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscrud.usuarios.sqlite.Materias;
import com.mscrud.usuarios.repositories.MateriasRepository;

@RestController
@RequestMapping("/materia")
public class MateriasController {
    @Autowired
    private MateriasRepository materiasRepo;

    @GetMapping("/get")
    public List<Materias>getMaterias(){
        return materiasRepo.findAll();
    }

    @PostMapping("/post")
    public Materias postMaterias(@RequestBody Materias entryData){
        return materiasRepo.save(entryData);
    }

    @PutMapping("/put/{id}")
    public Materias putMaterias(@PathVariable Integer id,
                                @RequestBody Materias entryData){
        Materias searchData = materiasRepo.findById(id).orElse(null);
        searchData.setCredits(entryData.getCredits());
        searchData.setTitle(entryData.getTitle());
        return materiasRepo.save(searchData);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMaterias(@PathVariable Integer id){
        materiasRepo.deleteById(id);
    }

}

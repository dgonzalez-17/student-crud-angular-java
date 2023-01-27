package com.mscrud.usuarios.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscrud.usuarios.sqlite.Alumno;
import com.mscrud.usuarios.repositories.AlumnoRepository;

@RestController
@RequestMapping("/alumno")
public class AlumnoController {
    @Autowired
    private AlumnoRepository alumnoRepo;

    @GetMapping("/get")
    public List<Alumno> getAlumno(){
        return alumnoRepo.findAll();
    }

    @PostMapping("/post")
    public Alumno postAlumno(@RequestBody Alumno entryData){
        return alumnoRepo.save(entryData);
    }

    @PutMapping("/put/{id}")
    public Alumno putAlumno(@PathVariable Integer id,
                            @RequestBody Alumno entryData){
        Alumno searchData = alumnoRepo.findById(id).orElse(null);
        searchData.setName(entryData.getName());
        searchData.setBirthday(entryData.getBirthday());
        searchData.setCareer(entryData.getCareer());
        return alumnoRepo.save(searchData);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAlumno(@PathVariable Integer id){
        alumnoRepo.deleteById(id);
    }

}

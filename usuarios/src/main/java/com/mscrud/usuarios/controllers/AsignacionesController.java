package com.mscrud.usuarios.controllers;
import com.mscrud.usuarios.repositories.AlumnoRepository;
import com.mscrud.usuarios.repositories.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscrud.usuarios.sqlite.Materias;
import com.mscrud.usuarios.sqlite.Profesor;
import com.mscrud.usuarios.sqlite.Alumno;
import com.mscrud.usuarios.repositories.MateriasRepository;

import java.util.List;

@RestController
@RequestMapping("/asignaciones")
public class AsignacionesController {
    @Autowired
    private AlumnoRepository alumnoRepo;
    @Autowired
    private MateriasRepository materiasRepo;
    @Autowired
    private ProfesorRepository profesorRepo;

    @PutMapping("/AsigMateriaProf/{idProf}/{idMateria}")
    public Profesor asignarMateriaProfesor(@PathVariable Integer idProf,
                                           @PathVariable Integer idMateria){
        Profesor searchProfesor = profesorRepo.findById(idProf).orElse(null);
        Materias searchMateria = materiasRepo.findById(idMateria).orElse(null);
        searchProfesor.setName(searchProfesor.getName());
        searchProfesor.setSubject(searchMateria);
        System.out.println(searchMateria);
        return profesorRepo.save(searchProfesor);
    }

    @GetMapping("/AsigMatAlumno/{idAlumno}/{idMateria}")
    public Alumno asignarMateriaAlumno(@PathVariable Integer idAlumno,
                                       @PathVariable Integer idMateria){
        Alumno searchAlumno = alumnoRepo.findById(idAlumno).orElse(null);
        Materias searchMateria = materiasRepo.findById(idMateria).orElse(null);
        searchAlumno.setName(searchAlumno.getName());
        searchAlumno.setDocument(searchAlumno.getDocument());
        searchAlumno.setBirthday(searchAlumno.getBirthday());
        searchAlumno.setCareer(searchAlumno.getCareer());
        searchAlumno.setMaterias(searchMateria);
        return alumnoRepo.save(searchAlumno);
    }

    @DeleteMapping("/DeleteMatAlumno/{idAlumno}/{idMateria}")
    public void eliminarMateriaDeAlumno(@PathVariable Integer idAlumno,
                                        @PathVariable Integer idMateria){
        alumnoRepo.deleteMateriaOfAlumno(idAlumno, idMateria);
    }
    @GetMapping("/getAsigByAlumno/{idAlumno}")
    public List<Materias> getAsignacionByAlumno(@PathVariable Integer idAlumno){
        return materiasRepo.findAllById(materiasRepo.findAsigByAlumno(idAlumno));
    }

    @GetMapping("/getAsigbyMateria/{idMateria}")
    public List<Alumno> getAlumnosByMateria(@PathVariable Integer idMateria) {
        return alumnoRepo.findAllById(alumnoRepo.findAlumnoByMateriaId(idMateria));
    }
}

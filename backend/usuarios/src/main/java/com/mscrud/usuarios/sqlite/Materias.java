package com.mscrud.usuarios.sqlite;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "materia")
public class Materias {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private Integer credits;

    @ManyToMany(fetch = FetchType.LAZY,
    cascade ={
            CascadeType.PERSIST,
            CascadeType.MERGE
    },
    mappedBy = "materias")
    @JsonIgnore
    private Set<Alumno> alumnos = new HashSet<>();


    public Materias() {
    }

    public Materias(Integer credits, String title) {
        this.credits = credits;
        this.title = title;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }
    public Set<Alumno> getAlumnos() {
        return alumnos;
    }

    public void setAlumnos(Set<Alumno> alumnos) {
        this.alumnos = alumnos;
    }


}

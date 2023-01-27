package com.mscrud.usuarios.sqlite;
import javax.persistence.*;
import java.text.DateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "alumno")
public class Alumno {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private Integer document;
    private String birthday;
    private String career;

    public Alumno() {
    }

    public Alumno(String name, Integer document, String birthday, String career) {
        this.name = name;
        this.document = document;
        this.birthday = birthday;
        this.career = career;
    }

    @ManyToMany(fetch= FetchType.LAZY, cascade = {
    CascadeType.PERSIST,
    CascadeType.MERGE
    })
    @JoinTable(name = "Asignaciones",
    joinColumns = {@JoinColumn(name = "alumno_id")},
    inverseJoinColumns = {@JoinColumn(name = "materias_id")})
    private Set<Materias> materias = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDocument() {
        return document;
    }

    public void setDocument(Integer document) {
        this.document = document;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

   public void setMaterias(Materias materia){
        this.materias.add(materia);
        materia.getAlumnos().add(this);
   }

    public Set<Materias> getMaterias() {
        return materias;
    }
}

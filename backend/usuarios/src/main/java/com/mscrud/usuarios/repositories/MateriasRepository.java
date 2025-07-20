package com.mscrud.usuarios.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mscrud.usuarios.sqlite.Materias;
import org.springframework.data.jpa.repository.Query;

public interface MateriasRepository extends JpaRepository<Materias, Integer>{


 @Query(value="select u.materias_id from asignaciones u where u.id =:alumnoId", nativeQuery = true)
 Iterable<Integer> findAsigByAlumno(Integer alumnoId);
}

package com.mscrud.usuarios.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mscrud.usuarios.sqlite.Materias;
import org.springframework.data.jpa.repository.Query;

public interface MateriasRepository extends JpaRepository<Materias, Integer>{
 @Query(value="Select a from asignaciones a where a.alumno_id =: alumnoId", nativeQuery = true)
 List<Materias> findMateriasByAlumnoId(Integer alumnoId);
}

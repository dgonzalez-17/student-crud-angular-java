package com.mscrud.usuarios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mscrud.usuarios.sqlite.Alumno;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer>{
  @Query(value="select a.id from asignaciones a where a.materias_id = :materiasId", nativeQuery = true)
  Iterable<Integer> findAlumnoByMateriaId(Integer materiasId);

  @Modifying
  @Transactional
  @Query(value="DELETE from asignaciones WHERE id= :alumnoId AND materias_id= :materiasId", nativeQuery = true)
  void deleteMateriaOfAlumno(Integer alumnoId,
                             Integer materiasId);
}

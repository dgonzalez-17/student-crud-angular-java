package com.mscrud.usuarios.repositories;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mscrud.usuarios.sqlite.Alumno;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer>{
  @Query(value="select a from asignaciones a where a.materias_id = :materiasId", nativeQuery = true)
  List<Alumno> findAlumnoByMateriaId(Integer materiasId);

  /*
  @Query(value="select u.materias_id from asignaciones u where u.id =:alumnoId", nativeQuery = true)
  List<Alumno> findAsigByAlumno(Integer alumnoId);*/

  @Modifying
  @Transactional
  @Query(value="DELETE from asignaciones WHERE id= :alumnoId AND materias_id= :materiasId", nativeQuery = true)
  void deleteMateriaOfAlumno(Integer alumnoId,
                             Integer materiasId);
}

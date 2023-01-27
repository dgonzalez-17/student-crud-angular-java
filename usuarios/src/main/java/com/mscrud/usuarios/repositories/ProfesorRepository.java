package com.mscrud.usuarios.repositories;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mscrud.usuarios.sqlite.Profesor;
public interface ProfesorRepository extends JpaRepository<Profesor, Integer> {

}

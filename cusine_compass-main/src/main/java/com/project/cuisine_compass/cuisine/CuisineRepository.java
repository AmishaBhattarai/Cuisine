package com.project.cuisine_compass.cuisine;

import com.project.cuisine_compass.cuisine.Cuisine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuisineRepository extends JpaRepository<Cuisine, Long> {

}

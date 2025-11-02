package com.aws.solution_architect.repo;


import com.aws.solution_architect.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<QuestionEntity,String> {}


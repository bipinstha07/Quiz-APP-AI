package com.aws.solution_architect.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Builder
@Entity
public class QuestionEntity {

    @Id
    private String id;
    private String question;
    private String option1;
    private  String option2;
    private String option3;
    private String option4;
    private String answer;
    private String quizId;

}

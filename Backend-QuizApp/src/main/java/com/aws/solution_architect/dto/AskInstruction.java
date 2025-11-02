package com.aws.solution_architect.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AskInstruction {

    private int questions;
    private String quizName;
    private String description;

}

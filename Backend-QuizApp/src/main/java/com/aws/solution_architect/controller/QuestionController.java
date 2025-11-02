package com.aws.solution_architect.controller;

import com.aws.solution_architect.dto.AskInstruction;
import com.aws.solution_architect.dto.QuestionDto;
import com.aws.solution_architect.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping("/generate")
    public ResponseEntity<List<QuestionDto>> generateQuestions(@RequestBody AskInstruction askInstruction){
        List<QuestionDto> questionDtos = questionService.createQuestion(askInstruction.getQuestions(),askInstruction.getQuizName(),askInstruction.getDescription());
//        questionDtos.forEach(a->{
//            System.out.println(a.getQuestion());
//            System.out.println(a.getAnswer());
//            System.out.println("Options");
//            System.out.println(a.getOption1());
//            System.out.println(a.getOption2());
//            System.out.println(a.getOption3());
//            System.out.println(a.getOption4());
//
//        });
        return new ResponseEntity<>(questionDtos, HttpStatus.OK);
    }

    @GetMapping("/test")
    public String test(){
        return "HI";
    }

}

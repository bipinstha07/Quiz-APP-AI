package com.aws.solution_architect.service;

import com.aws.solution_architect.dto.QuestionDto;
import com.aws.solution_architect.repo.Repository;
import org.modelmapper.ModelMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class QuestionService {


    private ChatClient chatClient;
    private Repository questionRepo;
    private ModelMapper modelMapper;


    public QuestionService(ChatClient.Builder chatbuilder, Repository questionRepo, ModelMapper modelMapper) {
        this.chatClient = chatbuilder.build();
        this.questionRepo = questionRepo;
        this.modelMapper = modelMapper;
    }

    public List<QuestionDto> createQuestion(int numberOfQuestion,String quizName,String description){
        String systemString= """
                As a Coding expert, your role is to generate High quality question for quiz
                """;

        String promtString = """
                Generate {numberOfQuestion} number of question for {quizName}
                Having description: {description}
                """;

        Map<String, Object> values= Map.of(
                "numberOfQuestion",numberOfQuestion,
                "quizName",quizName,
                "description",description
        );

        return this.chatClient.prompt()
                .system(systemString)
                .user(userSpec->userSpec.text(promtString).params(values))
                .call()
                .entity(new ParameterizedTypeReference<List<QuestionDto>>() {
                })
                ;
    }

}


import type { AskInstruction, QuestionDto } from '../types/quiz.types';

const API_BASE_URL = 'http://10.0.0.142:9090/api/v1/questions';

export const quizService = {
  async generateQuestions(askInstruction: AskInstruction): Promise<QuestionDto[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(askInstruction),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate questions: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error generating questions:', error);
      throw error;
    }
  },
};


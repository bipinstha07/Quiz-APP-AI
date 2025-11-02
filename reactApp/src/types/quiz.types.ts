export interface AskInstruction {
  questions: number;
  quizName: string;
  description: string;
}

export interface QuestionDto {
  id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  quizId: string;
}

export interface QuizState {
  questions: QuestionDto[];
  currentQuestionIndex: number;
  selectedAnswers: Record<string, string>;
  score: number;
  isCompleted: boolean;
  quizName: string;
  description: string;
}


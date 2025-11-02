import { useState, useEffect } from 'react';
import type { AskInstruction, QuestionDto } from '../../types/quiz.types';
import { quizService } from '../../services/quiz.service';

type QuizPhase = 'form' | 'quiz' | 'results';

export const Questions = () => {
  const [phase, setPhase] = useState<QuizPhase>('form');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<AskInstruction>({
    questions: '' as any,
    quizName: '',
    description: '',
  });
  const [questions, setQuestions] = useState<QuestionDto[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, string>>({});
  const [questionAnim, setQuestionAnim] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    setQuestionAnim('enter');
  }, [currentQuestionIndex]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'questions' ? (value === '' ? '' : parseInt(value) || '') : value,
    }));
  };

  const handleGenerateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate questions limit
    const questionsValue: string | number = formData.questions as any;
    let questionsNum: number;
    
    if (typeof questionsValue === 'string') {
      if (questionsValue === '' || questionsValue.trim() === '') {
        setError('Please enter the number of questions');
        return;
      }
      questionsNum = parseInt(questionsValue);
    } else {
      questionsNum = questionsValue;
    }
    
    if (isNaN(questionsNum)) {
      setError('Please enter a valid number of questions');
      return;
    }
    
    if (questionsNum < 1) {
      setError('Number of questions must be at least 1');
      return;
    }
    
    if (questionsNum > 50) {
      setError('Number of questions cannot exceed 50. Please enter a value between 1 and 50.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Create a proper form data object with number type
    const submitData = {
      ...formData,
      questions: questionsNum
    };

    try {
      const generatedQuestions = await quizService.generateQuestions(submitData);
      setQuestions(generatedQuestions);
      setPhase('quiz');
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setScore(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setQuestionAnim('exit');
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setQuestionAnim('exit');
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev - 1);
      }, 200);
    }
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setSubmittedAnswers({ ...selectedAnswers });
    setPhase('results');
  };

  const handleCancel = () => {
    setPhase('form');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setSubmittedAnswers({});
    setFormData({
      questions: '' as any,
      quizName: '',
      description: '',
    });
  };

  const handleRestart = () => {
    setPhase('form');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setSubmittedAnswers({});
    setFormData({
      questions: '' as any,
      quizName: '',
      description: '',
    });
  };

  const getOptionLabel = (index: number) => {
    return ['A', 'B', 'C', 'D'][index];
  };

  if (phase === 'form') {
    return (
      <div className="md:min-h-screen bg-white py-6 px-6 md:flex md:items-center md:justify-center">
        <div className="w-full max-w-lg mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2 md:mb-3 tracking-tight">
              Create Quiz
            </h1>
            <p className="text-gray-500 font-light text-sm md:text-base">
              Fill in the details to generate your quiz
            </p>
          </div>

          <form onSubmit={handleGenerateQuiz} className="space-y-8">
            <div>
              <label htmlFor="quizName" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Quiz Name
              </label>
              <input
                type="text"
                id="quizName"
                name="quizName"
                value={formData.quizName}
                onChange={handleFormChange}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                placeholder="Enter quiz name"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                required
                rows={3}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors resize-none bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                placeholder="Describe the quiz topic"
              />
            </div>

            <div>
              <label htmlFor="questions" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Number of Questions
              </label>
              <input
                type="number"
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleFormChange}
                min="1"
                placeholder="Enter number of questions"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 font-light py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full  bg-gray-900 text-white font-light py-4 px-6 hover:bg-gray-800 focus:outline-none transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></span>
                  Generating
                </span>
              ) : (
                'Generate Quiz'
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (phase === 'quiz') {
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const options = [
      currentQuestion.option1,
      currentQuestion.option2,
      currentQuestion.option3,
      currentQuestion.option4,
    ];

    return (
      <div className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex justify-between  items-center mb-2 text-lg text-gray-500 font-light tracking-wide uppercase">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span className="text-sm  md:text-base">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-100 h-px">
              <div
                className="bg-gray-900 h-px transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className={`mb-12 ${questionAnim === 'enter' ? 'animate-fade-in-up' : 'animate-fade-out'}`}>
            <h2 className="text-xl md:text-3xl font-light text-gray-900 leading-relaxed mb-12">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion.id] === option;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQuestion.id, option)}
                    className={`w-full text-left p-5 border transition-all duration-200 ${
                      isSelected
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 bg-white hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`font-light text-sm shrink-0 w-6 h-6 flex items-center justify-center ${
                        isSelected
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-600'
                      } transition-colors`}>
                        {getOptionLabel(index)}
                      </span>
                      <span className="text-gray-700 font-light leading-relaxed flex-1">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm uppercase tracking-wide font-light border border-gray-200 hover:border-gray-900 disabled:hover:border-gray-200"
              >
                Previous
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-3 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors text-sm uppercase tracking-wide font-light border border-gray-200 hover:border-gray-900"
              >
                Cancel
              </button>
            </div>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmitQuiz}
                className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 focus:outline-none transition-colors text-sm uppercase tracking-wide font-light"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 focus:outline-none transition-colors text-sm uppercase tracking-wide font-light"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Results Summary */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Quiz Complete
            </h1>
            <div className="mb-8">
              <div className="text-6xl font-light text-gray-900 mb-2">
                {percentage}%
              </div>
              <p className="text-gray-500 font-light text-lg">
                {score} out of {questions.length} correct
              </p>
            </div>

            <button
              onClick={handleRestart}
              className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 focus:outline-none transition-colors text-sm uppercase tracking-wide font-light"
            >
              New Quiz
            </button>
          </div>

          {/* Question Review */}
          <div className="space-y-8">
            <h2 className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-8">Review</h2>
            {questions.map((question, index) => {
              const userAnswer = submittedAnswers[question.id];
              const isCorrect = userAnswer === question.answer;
              const options = [
                question.option1,
                question.option2,
                question.option3,
                question.option4,
              ];

              return (
                <div
                  key={question.id}
                  className={`border-l-2 pb-8 pl-6 ${
                    isCorrect ? 'border-green-500' : 'border-red-500'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        Question {index + 1}
                      </span>
                      <span className={`text-xs font-medium uppercase tracking-wide ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <h3 className="text-lg font-light text-gray-900 leading-relaxed mb-6">
                      {question.question}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {options.map((option, optIndex) => {
                      const isUserAnswer = userAnswer === option;
                      const isCorrectAnswer = question.answer === option;

                      return (
                        <div
                          key={optIndex}
                          className={`p-4 border ${
                            isCorrectAnswer
                              ? 'border-green-500 bg-green-50'
                              : isUserAnswer && !isCorrectAnswer
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-white'
                          } transition-colors`}
                        >
                          <div className="flex items-start gap-4">
                            <span className={`font-light text-sm shrink-0 w-6 h-6 flex items-center justify-center ${
                              isCorrectAnswer
                                ? 'bg-green-500 text-white'
                                : isUserAnswer && !isCorrectAnswer
                                ? 'bg-red-500 text-white'
                                : 'border border-gray-300 text-gray-600'
                            }`}>
                              {getOptionLabel(optIndex)}
                            </span>
                            <span className="text-gray-700 font-light leading-relaxed flex-1">{option}</span>
                            {isCorrectAnswer && (
                              <span className="text-green-600 text-sm">✓</span>
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <span className="text-red-600 text-sm">✗</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

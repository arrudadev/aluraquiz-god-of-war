import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import LoadingWidget from '../../components/LoadingWidget';
import OtherQuizzes from '../../components/OtherQuizzes';
import QuestionWidget from '../../components/QuestionWidget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import ResultWidget from '../../components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage: React.FC = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState<IQuestion>({
    image: '',
    title: '',
    description: '',
    answer: 0,
    alternatives: [],
  });

  const router = useRouter();

  const questionIndex = currentQuestion;

  useEffect(() => {
    axios.post('/api/questions').then(response => {
      const responseQuestions = response.data;

      setQuestions(response.data);
      setQuestion(responseQuestions[questionIndex]);
      setTotalQuestions(responseQuestions.length);

      setTimeout(() => {
        setScreenState(screenStates.QUIZ);
      }, 2000);
    });
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
      setQuestion(questions[nextQuestion]);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  const addResult = result => {
    setResults([...results, result]);
  };

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <>
            <ResultWidget results={results} userName={router.query.name} />

            <OtherQuizzes />

            <Footer />
          </>
        )}

        <GitHubCorner projectUrl="https://github.com/monteiro-alexandre/aluraquiz-god-of-war" />
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;

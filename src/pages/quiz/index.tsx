import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import LoadingWidget from '../../components/LoadingWidget';
import OtherQuizzes from '../../components/OtherQuizzes';
import QuestionWidget from '../../components/QuestionWidget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import ResultWidget from '../../components/ResultWidget';
import questions from '../../data/questions.json';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage: React.FC = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const router = useRouter();

  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
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

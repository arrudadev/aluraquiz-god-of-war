import { useState } from 'react';

import { motion } from 'framer-motion';

import { AlternativesForm } from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';
import Button from '../Button';
import { Card, CardContent, CardHeader, CardTopic } from '../Card';

interface QuestionWidgetProps {
  question: IQuestion;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
  addResult: (result: boolean) => void;
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const handleSubmitForm = event => {
    event.preventDefault();
    setIsQuestionSubmited(true);

    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setSelectedAlternative(undefined);
      setIsQuestionSubmited(false);
    }, 3000);
  };

  const handleSelectAlternative = alternativeIndex => {
    setSelectedAlternative(alternativeIndex);
  };

  return (
    <Card
      as={motion.footer}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <CardHeader>
        <BackLinkArrow href="/" />
        <h3 style={{ margin: 0 }}>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </CardHeader>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <CardContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={handleSubmitForm}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <CardTopic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                isSelected={isSelected}
                status={isQuestionSubmited}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => handleSelectAlternative(alternativeIndex)}
                  checked={isSelected}
                  type="radio"
                />
                {alternative}
              </CardTopic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </CardContent>
    </Card>
  );
};

export default QuestionWidget;

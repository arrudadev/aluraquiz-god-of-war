import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader } from '../Card';
import { ReturnHomeContainer } from './styles';

interface ResultWidgetProps {
  results: boolean[];
  userName: string | string[];
}

const ResultWidget: React.FC<ResultWidgetProps> = ({ results, userName }) => {
  const points = results.filter(x => x).length * 100;

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
      <CardHeader>Resultado</CardHeader>

      <CardContent>
        <p>Seu resultado, {userName}</p>
        <h3>Você fez {points} pontos</h3>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #{index + 1} Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
        <ReturnHomeContainer>
          <a href="/">Voltar para a home</a>
        </ReturnHomeContainer>
      </CardContent>
    </Card>
  );
};

export default ResultWidget;

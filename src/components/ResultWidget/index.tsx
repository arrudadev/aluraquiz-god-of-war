import BackLinkArrow from '../BackLinkArrow';
import { Card, CardContent, CardHeader } from '../Card';

interface ResultWidgetProps {
  results: boolean[];
}

const ResultWidget: React.FC<ResultWidgetProps> = ({ results }) => {
  return (
    <Card>
      <CardHeader>
        <BackLinkArrow href="/" />
        Tela de Resultado:
      </CardHeader>

      <CardContent>
        <p>Você acertou {results.filter(x => x).length} perguntas</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #{index + 1} Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ResultWidget;

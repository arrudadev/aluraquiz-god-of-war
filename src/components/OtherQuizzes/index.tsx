import { Card, CardContent, CardTopic } from '../Card';
import Link from '../Link';

const externals = [
  'https://aluraquiz-css.omariosouto.vercel.app/',
  'https://aluraquiz-devsoutinho.omariosouto.vercel.app/',
  'https://aluraquiz.edilson-rodrigues.vercel.app/',
];

const OtherQuizzes: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <h1>Outros Quizzes</h1>

        <ul>
          {externals.map(externalLink => {
            const [projectName, githubUser] = externalLink
              .replace(/\//g, '')
              .replace('https:', '')
              .replace('.vercel.app', '')
              .split('.');

            return (
              <li key={externalLink}>
                <CardTopic as={Link} href={externalLink}>
                  {`${githubUser}/${projectName}`}
                </CardTopic>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OtherQuizzes;

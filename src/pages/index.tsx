import { ChangeEvent, useState } from 'react';

import Head from 'next/head';

import Button from '../components/Button';
import { Card, CardHeader, CardContent, CardTopic } from '../components/Card';
import Input from '../components/Input';
import Link from '../components/Link';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';

const Home: React.FC = () => {
  const [name, setName] = useState('');

  const externals = [
    'https://aluraquiz-css.omariosouto.vercel.app/',
    'https://aluraquiz-devsoutinho.omariosouto.vercel.app/',
    'https://aluraquiz.edilson-rodrigues.vercel.app/',
  ];

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz - Quiz God of War #AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />

        <Card>
          <CardHeader>
            <h1>Quiz God of War #AluraQuiz</h1>
          </CardHeader>
          <CardContent>
            <p>Teste seu conhecimento sobre a saga God of War</p>

            <form>
              <Input
                placeholder="Diz ai seu nome"
                onChange={handleInputNameChange}
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h1>Quizes da Galera</h1>

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
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;

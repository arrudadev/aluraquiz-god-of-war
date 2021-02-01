import { ChangeEvent, useState } from 'react';

import Head from 'next/head';

import Button from '../components/Button';
import { Card, CardHeader, CardContent } from '../components/Card';
import Input from '../components/Input';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';

const Home: React.FC = () => {
  const [name, setName] = useState('');

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
            <h1>AluraQuiz - Quiz God of War #AluraQuiz</h1>
          </CardHeader>
          <CardContent>
            <p>Um quiz rápido sobre o mundo do JavaScript</p>

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
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;

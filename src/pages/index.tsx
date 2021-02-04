import { ChangeEvent, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

import Button from '../components/Button';
import { Card, CardHeader, CardContent } from '../components/Card';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Input from '../components/Input';
import OtherQuizzes from '../components/OtherQuizzes';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';

const Home: React.FC = () => {
  const [name, setName] = useState('');

  const router = useRouter();

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground>
      <Head>
        <title>AluraQuiz - Quiz God of War #AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />

        <Card
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <CardHeader>
            <h1 style={{ margin: 0 }}>Quiz God of War #AluraQuiz</h1>
          </CardHeader>
          <CardContent>
            <p>Teste seu conhecimento sobre a saga God of War</p>

            <form onSubmit={handleSubmitForm}>
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

        <OtherQuizzes />

        <Footer />

        <GitHubCorner projectUrl="https://github.com/monteiro-alexandre/aluraquiz-god-of-war" />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Home;

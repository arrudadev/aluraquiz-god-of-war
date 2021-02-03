import styled from 'styled-components';

const QuizContainer = styled.section`
  width: 100%;
  max-width: 350px;

  padding-top: 45px;
  margin: auto 10%;

  float: right;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    max-width: 100%;
  }
`;

export default QuizContainer;

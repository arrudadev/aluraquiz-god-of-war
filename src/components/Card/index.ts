import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.mainBg};

  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 10px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

export const CardContent = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export const CardTopic = styled.a<{ isSelected?: boolean; status?: boolean }>`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};

  background-color: ${({ theme }) => `${theme.colors.primary}`};

  padding: 10px 15px;
  margin-bottom: 8px;

  cursor: pointer;

  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  opacity: ${props => {
    if (props.status) return '1';

    if (props.isSelected) return '0.5';

    return '1';
  }};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

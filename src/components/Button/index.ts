import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};

  width: 100%;
  padding: 10px 16px;

  font-weight: bold;
  font-size: 14px;

  line-height: 1;

  text-transform: uppercase;

  outline: 0;

  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default Button;

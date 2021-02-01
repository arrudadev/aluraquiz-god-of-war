import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;

  padding: 15px;
  margin-bottom: 25px;

  font-size: 14px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};

  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};

  outline: 0;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: 1; /* Firefox */
  }
`;

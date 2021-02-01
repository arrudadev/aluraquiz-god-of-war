import { StyledInput } from './styles';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <StyledInput placeholder={placeholder} onChange={onChange} {...props} />
  );
};

export default Input;

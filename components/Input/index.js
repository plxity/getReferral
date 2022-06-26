import { StyledInput } from './style';
const Input = ({ className, ...props }) => {
  return <StyledInput className={className} {...props} />;
};

export default Input;

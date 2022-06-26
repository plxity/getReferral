import React from 'react';
import { StyledButton } from './styles';
const Button = ({
  type = '',
  children,
  style = {},
  afterIcon,
  altIconText,
}) => {
  return (
    <StyledButton type={type} style={style} className={'default'}>
      {children}{' '}
      {afterIcon && <img src={`/icons/${afterIcon}.svg`} alt={altIconText} />}
    </StyledButton>
  );
};

export default Button;

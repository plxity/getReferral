import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 0.5px solid #263238;
  border-radius: 5px;
  height: 40px;
  min-width: 410px;
  padding-left: 10px;
  font-size: 16px;
  @media(max-width: 480px){
    width: 80%;
    min-width: 0px;
  }
`;

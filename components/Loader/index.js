import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${(props) => props.theme.color.blue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${Spin} 2s linear infinite;
`;

export default Loader;

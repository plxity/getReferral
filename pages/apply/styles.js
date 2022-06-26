import styled from 'styled-components';

export const ApplyContainer = styled.main`
  padding: 60px 120px;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  width: fit-content;
  justify-content: space-between;
  margin: 0 auto;
  button{
    width: 280px;
    align-self: center;
    margin-top: 30px;
  }
  @media (max-width: 480px){
    padding: 60px 20px;
    min-height: 70vh;
  }
`;

export const Heading = styled.span`
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 480px){
    font-size: 20px;
  }
`;

export const SubHeading = styled.span`
  font-size: 20px;
  @media (max-width: 480px){
    font-size: 18px;
  }
`;

import styled from 'styled-components';
import Button from '../Button';

export const MainContainer = styled.main`
  display: flex;
  padding: 108px 96px;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 40px 50px;
  }
  .main-logo {
    width: 430px;
    @media (max-width: 880px) {
      width: 300px;
      height: 300px;
      align-self: center;
    }
    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      align-self: center;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 106.5%;
  font-family: Gliroy;
  font-weight: normal;
  @media (max-width: 480px) {
    font-size: 26px;
    text-align: center;
    margin-top: 30px;
  }
`;

export const SubHeading = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin-top: 10px;
  font-weight: 500;
  width: 70%;
  color: ${(props) => props.theme.color.lightGray};
  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;

export const HeadingContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

export const BoldBlue = styled.span`
  color: ${(props) => props.theme.color.blue};
  font-weight: bold;
`;

export const OrangeText = styled.span`
  color: ${(props) => props.theme.color.orange};
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

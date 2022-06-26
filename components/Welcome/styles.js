import styled from 'styled-components';

export const WelcomeContainer = styled.main`
  height: 100%;
`;

export const NameContainer = styled.div`
  color: #8b8b8b;
  text-align: center;
  width: 45%;
  margin: 0 auto;
  padding: 85px 0px 90px 0px;
  position: relative;
  &:before {
    content: '';
    width: 120px;
    left: -30px;
    top: 80px;
    height: 120px;
    position: absolute;
    background-image: url('/patternTop.svg');
    @media (max-width: 820px) {
      display: none;
    }
  }
  &:after {
    content: '';
    width: 120px;
    right: -30px;
    bottom: 35px;
    height: 120px;
    position: absolute;
    background-image: url('/patternBottom.svg');
    @media (max-width: 820px) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 50px 0px;
  }
  @media (max-width: 1020px) {
    width: 90%;
    padding: 60px 0px;
  }

  @media (max-width: 880px) {
    width: 80%;
    padding: 60px 0px;
  }
`;

export const Name = styled.span`
  color: ${(props) => props.theme.color.blue};
`;

export const NameHeading = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 133%;
  /* or 37px */
  color: #8b8b8b;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  text-align: center;
  letter-spacing: 0.04em;
  color: #8b8b8b;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BlueText = styled.span`
  margin-top: 12px;
  display: block;
  color: ${(props) => props.theme.color.blue};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 880px) {
    width: 90%;
    flex-direction: column;
    height: 150px;
    align-items: center;
    div {
      margin-top: 10px;
    }
  }
  @media (max-width: 1020px) {
    width: 80%;
  }
`;

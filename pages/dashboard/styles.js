import styled from 'styled-components';

export const CustomHeading = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-align: center;
  color: #4a4a4a;
  @media (max-width: 480px) {
    font-size: 20px;
    padding: 0px 12px;
  }
`;

export const CreateApplicationContainer = styled.main`
  button {
    width: 280px;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 400px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const SubmittedForm = styled.div`
  text-align: center;
  margin-top: 40px;
  h2 {
    font-size: 30px;
  }
  p{
    font-size: 24px;
  }
`;

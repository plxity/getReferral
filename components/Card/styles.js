import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: fit-content;
  cursor: pointer;
  background-color: #f3f3f3;
  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 10px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  .mt-10 {
    margin-top: 10px;
  }
  .mt-12 {
    margin-top: 12px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Location = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const CreatedAt = styled.span``;
export const Company = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const CopyLinkContainer = styled.span`
  text-decoration: underline;
`;

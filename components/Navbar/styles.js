import styled from 'styled-components';

export const Header = styled.header`
  padding: 14px 96px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(4, 40, 197, 0.02);
  display: flex;
  justify-content: space-between;
  img {
    vertical-align: middle;
    cursor: pointer;
    width: auto;
    height: auto;
  }
  .fit-image {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .w-30 {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 820px) {
    padding: 14px 30px;
  }
`;

export const Logout = styled.span`
  align-self: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
`;

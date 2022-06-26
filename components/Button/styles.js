import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: ${(props) =>
    props.type === 'primary'
      ? props.theme.color.blue
      : props.type === 'secondry'
      ? props.theme.color.orange
      : 'transparent'};
  border: none;
  border-radius: 40px;
  border: ${(props) =>
    props.type.length === 0 ? `1px solid ${props.theme.color.blue}` : 'none'};
  color: ${(props) =>
    props.type.length === 0 ? props.theme.color.blue : props.theme.color.white};
  filter: drop-shadow(0px 4px 4px rgba(139, 139, 139, 0.2));
  img {
    vertical-align: middle;
    margin-left: 6px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;

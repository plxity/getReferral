import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
`;

export const StyledContent = styled(Dialog.Content)`
  background: white;
  height: auto;
  width: 360px;
  padding: 36px;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  min-height: 400px;
  border: 0.5px solid ${(props) => props.theme.color.blue};
  box-shadow: 0px 4px 4px rgba(4, 40, 197, 0.1);
  border-radius: 16px;
  transform: translate(-50%, -50%);
  .user-image{
    width: 200px;
    height: 200px;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  button {
    width: 250px;
    height: 50px;
    margin-top: 20px;
  }
`;

export const LoginButton = styled.button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.blue};
  filter: drop-shadow(0px 4px 4px rgba(139, 139, 139, 0.2));
  img {
    vertical-align: middle;
    margin-left: 6px;
    width: 16px;
    height: 16px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;

export const CreateProfile = styled.button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
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
  img {
    margin-left: 4px;
  }
`;

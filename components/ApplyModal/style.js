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
  width: 350px;
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
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
  cursor: pointer;
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
export const CreateProfile = styled.button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: ${(props) =>
    props.submitted ? '#008436' : props.theme.color.blue};
  border: none;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  filter: drop-shadow(0px 4px 4px rgba(139, 139, 139, 0.2));
  display: flex;
  justify-content: center;
  align-items: center;
}
  img {
    vertical-align: middle;
    margin-left: 8px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  margin-top: 50px;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid #0428c5;
  border-radius: 42px;
  padding: 14px;
  position: relative;
  text-align: left;

  img {
    position: absolute;
    width: 22px;
    height: 22px;
    right: 16px;
  }
  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 90%;
  outline: none;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ConnectPeerlist = styled(CreateProfile)`
  background: ${(props) => props.color};
  width: 100%;
  margin-top: 80px;
  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const CelebrationContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;
export const Congrats = styled.h2`
  font-size: 28px;
  line-height: 33px;
  color: ${(props) => props.theme.color.blue};
`;

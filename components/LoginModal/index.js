import * as Dialog from '@radix-ui/react-dialog';
import {
  StyledContent,
  StyledOverlay,
  CloseIcon,
  ButtonContainer,
  LoginButton,
  CreateProfile,
} from './styles';
import { signIn } from 'next-auth/react';
function Content({ children, ...props }) {
  return (
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </Dialog.Portal>
  );
}
const DialogContent = Content;
const LoginModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <CreateProfile>
        Create a Job Opening{' '}
        <img src="/icons/arrowLeft.svg" alt="arrow pointing towards left" />
      </CreateProfile>
    </Dialog.Trigger>
    <DialogContent>
      <img src="/loginBro.svg" />
      <ButtonContainer>
        <LoginButton onClick={() => signIn('google')}>
          Login with Google{' '}
          <img src="/icons/google.svg" alt="login with google icon" />
        </LoginButton>
        <LoginButton onClick={() => signIn('linkedin')}>
          Login with LinkedIn{' '}
          <img src="/icons/linkedIn.svg" alt="login with linkedin icon" />
        </LoginButton>
      </ButtonContainer>
      <Dialog.Close asChild>
        <CloseIcon
          src="/icons/closeIcon.svg"
          alt="A cross icon for closing the login modal"
        />
      </Dialog.Close>
    </DialogContent>
  </Dialog.Root>
);

export default LoginModal;

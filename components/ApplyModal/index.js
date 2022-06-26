import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import {
  StyledContent,
  StyledOverlay,
  CloseIcon,
  ConnectPeerlist,
  CreateProfile,
  InputContainer,
  Input,
  InfoField,
  CelebrationContainer,
  Congrats,
} from './style';
import axios from 'axios';
function Content({ children, ...props }) {
  return (
    <Dialog.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </Dialog.Portal>
  );
}
const DialogContent = Content;

const InputField = ({ icon, ...props }) => {
  return (
    <InputContainer>
      <Input {...props} />
      <img src={`/icons/${icon}`} />
    </InputContainer>
  );
};

const ApplyModal = ({ applicationId, userId }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    peerlistUserName: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { email, peerlistUserName } = userInfo;
  const color =
    email.length > 0 && peerlistUserName.length > 0 ? '#008436' : '#AFAFAF';
  const onFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios
      .post(`/api/application/submit/${applicationId}`, {
        userId,
        email,
        peerlistUserName,
        userId,
      })
      .then((res) => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        alert('Something went wrong. Please try again');
      });
  };
  const renderDialogContent = () => {
    if (isSubmitted) {
      return (
        <CelebrationContainer>
          <img src="/celebrate.png" alt="Group of people celebrating" />
          <Congrats>Congratulations!</Congrats>
          <p>You have successfully applied!</p>
        </CelebrationContainer>
      );
    } else {
      return (
        <form onSubmit={onFormSubmit}>
          <InfoField>
            <InputField
              placeholder="Enter your Email"
              onChange={onChange}
              name="email"
              type="email"
              required={true}
              icon="gmailLogo.svg"
            />
            <InputField
              placeholder="Enter Peerlist username"
              onChange={onChange}
              required={true}
              name="peerlistUserName"
              icon="peerlistLogo.svg"
            />
          </InfoField>
          <ConnectPeerlist color={color}>
            Connect via Peerlist{' '}
            <img
              src="/icons/peerlistLogo.svg"
              alt="arrow pointing towards left"
            />
          </ConnectPeerlist>
        </form>
      );
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CreateProfile submitted={isSubmitted}>
          {isSubmitted ? 'Applied' : 'Apply for this job'}
          {isSubmitted ? (
            <img
              src="/icons/peerlistLogo.svg"
              alt="arrow pointing towards left"
            />
          ) : (
            <img src="/icons/arrowLeft.svg" alt="arrow pointing towards left" />
          )}
        </CreateProfile>
      </Dialog.Trigger>
      <DialogContent>
        {renderDialogContent()}
        <Dialog.Close asChild>
          <CloseIcon
            src="/icons/closeIcon.svg"
            alt="A cross icon for closing the login modal"
          />
        </Dialog.Close>
      </DialogContent>
    </Dialog.Root>
  );
};

export default ApplyModal;

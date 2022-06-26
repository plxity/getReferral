import {
  MainContainer,
  Heading,
  SubHeading,
  HeadingContainer,
  BoldBlue,
  OrangeText,
  ButtonContainer,
} from './styles';
import Button from '../Button';
import LoginModal from '../LoginModal';

const triggerModal = (
  <Button
    type="primary"
    afterIcon="arrowLeft"
    altIconText="Arrow icon pointing towards left"
  >
    Create a Job Opening
  </Button>
);

function Main() {
  return (
    <MainContainer>
      <HeadingContainer>
        <Heading>
          <BoldBlue>Reviewing</BoldBlue> and <BoldBlue>Listing</BoldBlue> job
          applications made easy for you
        </Heading>
        <SubHeading>
          Manage your numerous job refferals using refer me.
          <OrangeText> Free, Convenient </OrangeText> &
          <OrangeText> Easy to Use.</OrangeText>
        </SubHeading>
        <ButtonContainer>
          <LoginModal triggerModal={triggerModal} />
        </ButtonContainer>
      </HeadingContainer>
      <img
        src="mainLogo.svg"
        alt="A image of girl reading different resumes"
        className="main-logo"
      />
    </MainContainer>
  );
}

export default Main;

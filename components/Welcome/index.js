import {
  WelcomeContainer,
  NameContainer,
  Name,
  NameHeading,
  SubHeading,
  BlueText,
  ButtonContainer,
} from './styles';
import { useSession } from 'next-auth/react';
import Button from '../Button';
import Link from 'next/link';
function Welcome({}) {
  const emoji = ':)';
  const { data: session } = useSession();
  const { user: { name = '' } = {} } = session;
  return (
    <WelcomeContainer>
      <NameContainer>
        <NameHeading>Hi {name && <Name>{name}</Name>},</NameHeading>
        <SubHeading>
          We are so glad to have you here. You are just a click away from
          getting started with getReferred. So, what are you waiting for?{' '}
          <BlueText>
            Create a Job Opening and collect the responses already! {emoji}
          </BlueText>
        </SubHeading>
      </NameContainer>
      <ButtonContainer>
        <Link href="/dashboard/view">
          <a>
            <Button>View Previous Responses</Button>
          </a>
        </Link>
        <Link href="/dashboard/create">
          <a>
         
            <Button
              type="secondry"
              afterIcon="arrowLeft"
              altIconText="an arrow point towards left"
            >
              Create a Job Opening
            </Button>
          </a>
        </Link>
      </ButtonContainer>
    </WelcomeContainer>
  );
}

export default Welcome;

import React from 'react';
import { Header, Logout } from './styles';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
function Navbar({ isAuth = false }) {
  const { data: session } = useSession();

  const router = useRouter();
  const onBack = () => {
    router.push('/dashboard');
  };
  const onLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}`,
    });
  };
  const redirectToHomepage = () => {
    router.push('/');
  };
  const redirectToDashboard = () => {
    router.push('/dashboard');
  };
  const renderHeaderContent = () => {
    const {
      user: { image = '' },
    } = session;
    if (isAuth) {
      return (
        <img
          src="/icons/backArrow.svg"
          alt="user image"
          className="fit-image w-30"
          onClick={onBack}
        />
      );
    } else if (image) {
      return (
        <img
          src={image}
          alt="an arrow for going back to the previous screen"
          className="fit-image"
          onClick={redirectToDashboard}
        />
      );
    }
    return (
      <img
        src="/icons/user.svg"
        alt="user face icon"
        onClick={redirectToDashboard}
      />
    );
  };
  // todo: Add logout option
  return (
    <Header>
      {session ? (
        renderHeaderContent()
      ) : (
        <img
          src="/logo.svg"
          alt="Get Referred Logo"
          onClick={redirectToHomepage}
        />
      )}
      {session && <Logout onClick={onLogout}>Logout</Logout>}
    </Header>
  );
}

export default Navbar;

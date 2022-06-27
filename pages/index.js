import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { Container } from '../styles/globalStyles';
import Meta from './Meta';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  // loading state
  if (status === 'loading') {
    return <div />;
  }

  if (status === 'authenticated') {
    router.push('/dashboard');
    return '';
  }

  return (
    <>

      <Meta />
      <Container>
        {/* Meta tags */}

        {/* Navbar component */}
        <Header />

        {/* Main Component */}
        <Main />

        {/* Footer Component */}
        <Footer />
      </Container>
    </>
  );
}

import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

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
    <div>
      <Head>
        <title>getReferral</title>
        <meta name="description" content="Referrals made easy" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* Navbar component */}
      <Header />

      {/* Main Component */}
      <Main />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

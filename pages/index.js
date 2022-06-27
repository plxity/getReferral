import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { Container } from '../styles/globalStyles';

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
    <Container>
      <Head>
        <title>getReferral</title>
        <meta name="title" content="getReferral" />
        <meta
          name="description"
          content="Manage your referrals without any hassle and apply to job openings in one click powered by Peerlist"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://get-referral.vercel.app/"
        />
        <meta property="twitter:title" content="getReferral" />
        <meta
          property="twitter:description"
          content="Manage your referrals without any hassle and apply to job openings in one click powered by Peerlist"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhunsqg4j/image/upload/v1656337546/Group_102_wel9ok.png"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* Navbar component */}
      <Header />

      {/* Main Component */}
      <Main />

      {/* Footer Component */}
      <Footer />
    </Container>
  );
}

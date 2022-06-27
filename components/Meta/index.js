import Head from 'next/head';

const Meta = ({
  title = 'getReferral - referrals made easy',
  companyName = '',
}) => {
  return (
    <Head>
      <title>getReferral</title>
      <meta name="title" content={`${title} ${companyName}`} />
      <meta name="description" content="" />
      <meta itemprop="name" content={`${title} ${companyName}`} />
      <meta
        itemprop="description"
        content="Manage your referrals without any hassle and apply to job openings in one click powered by Peerlist"
      />
      <meta
        itemprop="image"
        content="https://res.cloudinary.com/dhunsqg4j/image/upload/v1656337546/Group_102_wel9ok.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://get-referral.vercel.app/" />
      <meta property="og:title" content={`${title} ${companyName}`} />
      <meta
        property="og:description"
        content="Manage your referrals without any hassle and apply to job openings in one click powered by Peerlist"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dhunsqg4j/image/upload/v1656337546/Group_102_wel9ok.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://get-referral.vercel.app/" />
      <meta property="twitter:title" content={`${title} ${companyName}`} />
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
  );
};
export default Meta;

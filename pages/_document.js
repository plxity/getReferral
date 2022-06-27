import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

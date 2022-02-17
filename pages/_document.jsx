import Document, { Head, Html, Main, NextScript } from 'next/document';
import Meta from '../components/Meta/Meta';
import Script from 'next/script';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    const referrer = 'strict-origin';
    return (
      <Html lang="en" style={{ width: '100%' }}>
        {' '}
        <Head>
          <meta name="referrer" content={referrer} />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-5KMTCTNPHE"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5KMTCTNPHE');
        `}
          </Script>

          <Meta />
        </Head>
        <body>
          <title>
            Stevens Services (816) 824-7289 | Lawn & Landscape, Snow & Ice,
            Construction & Remodeling
          </title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

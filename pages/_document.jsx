import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import Meta from '../components/Meta/Meta';

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
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

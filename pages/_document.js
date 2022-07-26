import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/SegoeUI-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI-SemiBold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI-Light.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SegoeUI-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          {/* Modal will be mounted here */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

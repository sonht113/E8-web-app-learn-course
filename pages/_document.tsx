import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>E8 Learn EL to work</title>
          <link rel="shortcut icon" href="/static/images/icon.png" />
          <meta property="og:title" content="E8 Learn EL to work" key="title" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

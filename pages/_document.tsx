import Document, { Html, Main, Head, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

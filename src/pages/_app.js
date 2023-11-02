import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {

  return (
    <React.Fragment>
      <Head>
        <title>Bem-Vindo</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp;
import Head from 'next/head'
import "../dist/output.css";
import Navbar from "../components/Navbar";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matt Hiatt | Portfolio</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
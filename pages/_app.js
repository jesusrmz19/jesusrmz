import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../components/styles/styles.css';
import { NavStateProvider } from '../lib/navState';
import Page from '../components/Page';
import Head from 'next/head';

config.autoAddCss = false;
library.add(fab);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="twitter:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta name="twitter:image" content="https://jesusrmz.com/profile.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />
        <meta property="og:url" content="https://jesusrmz.com/" />
        <meta
          name="description"
          content="Web Developer and Designer, based in Guadalajara, Mexico. I help businesses increase competitiveness by designing and developing great-looking and functional websites."
        />

        <meta property="og:image" content="https://jesusrmz.com/profile.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </NavStateProvider>
    </>
  );
}

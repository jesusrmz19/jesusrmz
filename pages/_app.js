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

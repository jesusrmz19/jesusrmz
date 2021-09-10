import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../components/styles/styles.css';

config.autoAddCss = false;
library.add(fab);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

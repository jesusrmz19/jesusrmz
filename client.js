// This where sanity va a ver de qué proyecto jalar la información
// Primero hay que instalar en el root folder npm run @sanity/client

import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'nxsxkxc5',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});

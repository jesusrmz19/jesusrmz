import sanityClient from '../client';

export async function getProjects() {
  const allProjects = await sanityClient.fetch(
    `*[_type == "project"]{
            title,
            description,
            link,
            repo,
            date,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
  );
  return allProjects.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

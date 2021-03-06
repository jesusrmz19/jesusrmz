import sanityClient from '../client';

export async function getProjects() {
  const allProjects = await sanityClient.fetch(
    `*[_type == "project"]{
            title,
            slug,
            industry,
            link,
            date,
            bgcolor,
            designed,
            developed,
            homepage,
            altImage,
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

export async function getHomePageProjects() {
  const allProjects = await getProjects();
  return allProjects.filter((project) => project.homepage == true);
}

export async function getExperiments() {
  const allExperiments = await sanityClient.fetch(
    `*[_type == "experiment"]{
      title,
      date,
      link,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      }
    }`
  );
  return allExperiments.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllBlogs() {
  const allPosts = await sanityClient.fetch(
    `*[_type == "post"]{
                  title,
                  slug, 
                  date,
                  description,
                  mainImage {
                      asset->{
                          _id,
                          url
                      },
                      alt
                  },
                  altMainImage,
              }`
  );
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getLatestsBlogs() {
  const allPosts = await sanityClient.fetch(
    `*[_type == "post"]{
                  title,
                  slug, 
                  date,
                  description,
                  mainImage {
                      asset->{
                          _id,
                          url
                      },
                      alt
                  },
                  altMainImage,
              }`
  );
  let sorted = allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return [sorted[0], sorted[1], sorted[2]];
}

export async function getSideProjects() {
  const sideProjects = await sanityClient.fetch(
    `*[_type == "sideProject"]{
            title,
            description,
            link,
            repo,
            date,
            projectTechnologies,
            altImage,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
  );
  return sideProjects.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

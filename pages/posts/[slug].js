import { useRouter } from 'next/router';
import sanityClient from '../../client';

export default function SinglePostPage({ data }) {
  return (
    <div>
      <h1>Title: {data[0].title}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const allId = await sanityClient.fetch(
    `*[_type == "post"]{
            title,
            slug,
        }`
  );
  const paths = allId.map((id) => {
    return {
      params: {
        slug: id.slug.current.toString(),
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await sanityClient.fetch(`*[slug.current == "${params.slug}"]{
      title,
      slug,
      mainImage {
          asset-> {
              _id,
              url
          }
      },
      body,
  }`);
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

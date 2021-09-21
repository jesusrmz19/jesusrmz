import { useRouter } from 'next/router';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';

export default function SinglePostPage({ data }) {
  return (
    <div>
      <h1>Title: {data[0].title}</h1>
      <div>
        <BlockContent
          blocks={data[0].body}
          projectId="nxsxkxc5"
          dataset="production"
        ></BlockContent>
      </div>
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
  return {
    props: {
      data,
    },
  };
}

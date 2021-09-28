import { useRouter } from 'next/router';
import Link from 'next/link';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { setDate } from '../../lib/helpers';

const SinglePostStyles = styled.div`
  background: var(--bgColor);
  padding: 2rem 2rem;
  color: var(--fontColor);
  .post--title {
    font-family: var(--bold);
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  .post--date {
    font-family: var(--bold);
    text-align: center;
    margin: 0.5rem 0 2rem 0;
  }
  .post--img {
    margin-bottom: 1.5rem;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .post--container {
    width: 100%;
    margin: 0 auto;
  }
  .post--content {
    margin-bottom: 3rem;
    width: 100%;
    p {
      width: 100%;
      font-family: var(--regular);
      white-space: initial;
      line-height: 2;
    }
  }
  .goBack {
    text-align: center;
    margin-bottom: 2rem;
    a {
      text-decoration: none;
      font-family: var(--bold);
      text-transform: uppercase;
      color: var(--btnTxt);
      background: var(--btnBg);
      padding: 0.8rem;
    }
  }
`;

export default function SinglePostPage({ data }) {
  return (
    <SinglePostStyles>
      <h1 className="post--title">{data[0].title}</h1>
      <p className="post--date">{setDate(data[0].date)}</p>
      <div className="post--img">
        <img src={data[0].mainImage.asset.url} />
      </div>
      <div className="post--container">
        <BlockContent
          blocks={data[0].body}
          projectId="nxsxkxc5"
          dataset="production"
          className="post--content"
        ></BlockContent>
      </div>
      <div className="goBack">
        <Link href="/posts">Back to Posts</Link>
      </div>
    </SinglePostStyles>
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
      date,
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

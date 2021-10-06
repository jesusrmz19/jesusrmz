import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { setDate } from '../../lib/helpers';
import { device } from '../../lib/breakpoints';

const SinglePostStyles = styled.main`
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
    ul {
      list-style-type: square;

      font-family: var(--regular);
      line-height: 2;
      margin-top: 1em;
      margin-bottom: 1em;
      padding-left: 40px;
    }
    h2,
    h3 {
      font-family: var(--bold);
      margin: 1.2rem 0 0.6rem 0;
    }
    p {
      width: 100%;
      font-family: var(--regular);
      white-space: initial;
      line-height: 2;
    }
    pre {
      background: black;
      color: white;
      padding: 1rem;
      font-size: 14px;
      line-height: 1.5;
      overflow: auto;
    }
    figure {
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      img {
        width: 85%;
        margin: 1rem auto;
        border-radius: 10px;
      }
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
  @media ${device.laptop} {
    padding: 3rem 2rem;
    .post--container {
      width: 80%;
    }
    .post--img {
      text-align: center;
      img {
        width: 80%;
      }
    }
  }
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function SinglePostPage({ data }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={data[0].description} />
        <meta name="twitter:creator" content="@jesusrmz_" />
        <meta name="twitter:title" content={data[0].title} />
        <meta name="twitter:description" content={data[0].description} />
        <meta
          name="twitter:image"
          content={
            data[0].thumbnailImage?.asset?.url
              ? data[0].thumbnailImage.asset.url
              : data[0].mainImage.asset.url
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://jesusrmz.com/posts/${data[0].slug.current}}`}
        />
        <meta property="og:title" content={data[0].title} />
        <meta property="og:description" content={data[0].description} />
        <meta property="og:image" content={data[0].mainImage.asset.url} />
        <meta
          property="og:url"
          content={`https://jesusrmz.com/posts/${data[0].slug.current}}`}
        />
        <meta name="description" content={data[0].description} />
        <link rel="icon" href="/favicon.png" />
        <title>{data[0].title}</title>
      </Head>
      <SinglePostStyles>
        <div className="post--container">
          <h1 className="post--title">{data[0].title}</h1>
          <p className="post--date">{setDate(data[0].date)}</p>
          <div className="post--img">
            <img src={data[0].mainImage.asset.url} alt={data[0].altMainImage} />
          </div>
          <div className="post--container">
            <BlockContent
              blocks={data[0].body}
              projectId="nxsxkxc5"
              dataset="production"
              className="post--content"
              serializers={serializers}
            ></BlockContent>
          </div>
          <div className="goBack">
            <Link href="/posts">Back to Posts</Link>
          </div>
        </div>
      </SinglePostStyles>
    </>
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
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const data = await sanityClient.fetch(`*[slug.current == "${params.slug}"]{
      title,
      slug,
      date,
      description,
      mainImage {
          asset-> {
              _id,
              url
          }
      },
      altMainImage,
      thumbnailImage {
        asset -> {
          _id,
          url
        }
      },
      altThumbnail,
      body,
  }`);
  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}

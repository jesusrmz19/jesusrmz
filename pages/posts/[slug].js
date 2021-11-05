import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { setDate } from '../../lib/helpers';
import { device } from '../../lib/breakpoints';
import SinglePostStyles from '../../components/styles/SinglePostPage';

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
          <div className="post--header">
            <h1 className="post--header-title">{data[0].title}</h1>
            <p className="post--header-date">{setDate(data[0].date)}</p>
          </div>
          <div className="post--img">
            <img src={data[0].mainImage.asset.url} alt={data[0].altMainImage} />
          </div>
          <div className="post--content">
            <BlockContent
              blocks={data[0].body}
              projectId="nxsxkxc5"
              dataset="production"
              className="post--content"
              serializers={serializers}
            ></BlockContent>
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

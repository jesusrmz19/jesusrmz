import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import sanityClient from '../../client';
import PostsPageStyles from '../../components/styles/PostsPage';
import { getAllBlogs } from '../../lib/getFunctions';
import Card from '../../components/Card';
import { setDate } from '../../lib/helpers';
import { useNav } from '../../lib/navState';

export async function getStaticProps() {
  const allBlogPosts = await getAllBlogs();
  return {
    props: {
      allBlogPosts,
    },
    revalidate: 5,
  };
}

const CardItem = React.forwardRef(({ onClick, href, props }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Card details={props}></Card>
    </a>
  );
});

function PostsPage({ allBlogPosts }) {
  const { closeNav } = useNav();
  useEffect(() => {
    closeNav();
  }, []);
  return (
    <PostsPageStyles>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__txt">
            <h1>blog</h1>
            <p>
              <span>All my posts,</span>
              <span>from technical to personal,</span>
              <span>all are here.</span>
            </p>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content__container">
          {allBlogPosts.map((blog) => (
            <Link
              href={`/posts/${blog.slug.current}`}
              key={blog.slug.current}
              passHref={true}
            >
              <CardItem props={blog} />
            </Link>
          ))}
        </div>
      </section>
    </PostsPageStyles>
  );
}

{
  /* <div className="container">
{allBlogPosts.map((post) => (
  <Link href={`/posts/${post.slug.current}`} key={post.slug.current}>
    <Card className="card">
      <div className="card--img">
        <img
          src={post.mainImage.asset.url}
          alt={post.altMainImage}
        ></img>
      </div>
      <div className="card--txt">
        <h4 className="card--title">{post.title}</h4>
        <p className="card--description">{post.description}</p>
        <p className="card--date">{setDate(post.date)}</p>
      </div>
    </Card>
  </Link>
))}
</div> */
}

export default PostsPage;

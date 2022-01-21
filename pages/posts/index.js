import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import sanityClient from '../../client';
import PostsPageStyles from '../../components/styles/PostsPage';
import { getAllBlogs } from '../../lib/getFunctions';
import Card from '../../components/Card';
import { setDate } from '../../lib/helpers';
import { useNav } from '../../lib/navState';
import { motion } from 'framer-motion';

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

const hero = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const content = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function PostsPage({ allBlogPosts }) {
  const { closeNav } = useNav();
  useEffect(() => {
    closeNav();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:title" content="Jesus Ramirez | Blog" />
        <meta name="twitter:url" content="https://jesusrmz.com/blog" />
        <meta property="og:title" content="Jesus Ramirez | Blog" />
        <title>Jesus Ramirez | Blog</title>
      </Head>
      <PostsPageStyles>
        <motion.section
          animate="animate"
          initial="initial"
          variants={hero}
          className="hero"
        >
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
        </motion.section>
        <motion.section
          animate="animate"
          initial="initial"
          variants={content}
          className="content"
        >
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
        </motion.section>
      </PostsPageStyles>
    </>
  );
}

export default PostsPage;

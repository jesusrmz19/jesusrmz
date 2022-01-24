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

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
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
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          className="content"
        >
          <div className="content__container">
            {allBlogPosts.map((blog) => (
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={postVariants}
                key={blog.slug.current}
              >
                <Link href={`/posts/${blog.slug.current}`} passHref={true}>
                  <CardItem props={blog} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </PostsPageStyles>
    </>
  );
}

export default PostsPage;

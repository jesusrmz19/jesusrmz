import { useState, useEffect } from 'react';
import Link from 'next/link';
import sanityClient from '../../client';
import PostsPageStyles from '../../components/styles/PostsPage';
import { getAllBlogs } from '../../lib/getFunctions';
import Card from '../../components/styles/Card';
import { setDate } from '../../lib/helpers';

export async function getStaticProps() {
  const allBlogPosts = await getAllBlogs();
  console.log(allBlogPosts);
  return {
    props: {
      allBlogPosts,
    },
  };
}

function PostsPage({ allBlogPosts }) {
  return (
    <PostsPageStyles>
      <section>
        <h1>Blog Posts</h1>
        <h2>Welcome to my page of blog posts</h2>
        <div>
          {allBlogPosts.map((post) => (
            <Link href={`/posts/${post.slug.current}`} key={post.slug.current}>
              <Card className="card">
                <div className="card--img">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
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
        </div>
      </section>
    </PostsPageStyles>
  );
}

export default PostsPage;

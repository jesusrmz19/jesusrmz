import { useState, useEffect } from 'react';
import Link from 'next/link';
import sanityClient from '../../client';

function PostsPage({ allPosts }) {
  return (
    <main>
      <section>
        <h1>Blog Post Page</h1>
        <h2>Welcome to my page of blog posts</h2>
        <div>
          {allPosts.map((post, index) => (
            <Link href={`/posts/${post.slug.current}`} key={post.slug.current}>
              <article>
                <span>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  ></img>
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(
    `*[_type == "post"]{
                  title,
                  slug,
                  mainImage {
                      asset->{
                          _id,
                          url
                      },
                      alt
                  }
              }`
  );
  return {
    props: {
      allPosts,
    },
  };
}

export default PostsPage;

import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { device } from '../lib/breakpoints';

const BookCard = styled.div`
  width: 300px;
  height: 430px;
  background: var(--white);
  margin: 0 auto 40px auto;
  padding: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    margin: 0 auto 0 auto;
  }
  .book {
    &__title {
      font-size: 18px;
      font-family: var(--bold);
      color: var(--alwaysblack);
    }
    &__img {
      img {
        height: 250px;
      }
    }
    &__author {
      font-size: 18px;
      font-family: var(--regular);
      color: var(--greytxt);
    }
  }
`;

const BooksPageStyles = styled.main`
  background: var(--ffbg);
  .hero {
    &__container {
      max-width: 1000px;
      margin: 0 auto;
      padding-left: 25px;
      padding-right: 25px;
      @media ${device.tablet} {
        padding-left: 50px;
        padding-right: 50px;
        text-align: center;
      }
      @media ${device.laptopM} {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    &__text {
      padding-top: 130px;
      padding-bottom: 70px;
      h1 {
        font-size: 14px;
        color: var(--greytxt);
        font-family: var(--bold);
        text-transform: uppercase;
        letter-spacing: 14px;
      }
      p {
        margin-top: 12px;
        width: 90%;
        font-size: 30px;
        color: var(--blacktxt);
        font-family: var(--bold);
        letter-spacing: 3px;
        @media ${device.tablet} {
          width: 80%;
          margin: 12px auto 0 auto;
        }
        @media ${device.laptop} {
          font-size: 48px;
          letter-spacing: 4.8px;
        }
      }
    }
  }
  .books {
    padding-bottom: 40px;
    &__container {
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
      @media ${device.tablet} {
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
      }
    }
    &__loader {
      color: var(--blacktxt);
      font-family: var(--bold);
      font-size: 20px;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jrmbookapi.herokuapp.com/books/all')
      .then((res) => res.json())
      .then((data) => setBooks(data));
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:title" content="Jesus Ramirez | Books" />
        <meta name="twitter:url" content="https://jesusrmz.com/books" />
        <meta property="og:title" content="Jesus Ramirez | Books" />
        <title>Jesus Ramirez | Books</title>
      </Head>
      <BooksPageStyles>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__text">
              <h1>books</h1>
              <p>
                I've read some books on my days, but these are the most recent
              </p>
            </div>
          </div>
        </section>
        <section className="books">
          <div className="books__container">
            {loading ? (
              <p className="books__loader">Loading...</p>
            ) : (
              books.map((book) => (
                <BookCard className="book" key={book._id}>
                  <h2 className="book__title">{book.title}</h2>
                  <div className="book__img">
                    <img
                      src={book.imgUrl}
                      alt={`Cover of the book ${book.title} by ${book.author}`}
                    ></img>
                  </div>
                  <h3 className="book__author">By {book.author}</h3>
                </BookCard>
              ))
            )}
          </div>
        </section>
      </BooksPageStyles>
    </>
  );
}

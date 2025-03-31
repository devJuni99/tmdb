import React from 'react';
import { useLocation } from 'react-router';
import Buttons from '../components/Buttons';
import Videos from '../components/Videos';

export default function MovieDetail() {
  const { state: movies } = useLocation();
  const description = movies.overview
    ? movies.overview
    : '현재 이 영화에 대한 설명이 제공되지 않습니다.';
  const backgroundURL = movies.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
    : null;
  const postURL = movies.poster_path
    ? `https://image.tmdb.org/t/p/original${movies.poster_path}`
    : null;

  return (
    <section>
      <main
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundURL ? `url(${backgroundURL})` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex p-8">
          <article className="flex flex-col md:flex-row gap-6 text-white">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src={postURL}
                alt={movies.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col gap-4 pt-12">
              <h2 className="text-4xl font-bold">
                {movies.original_title} ({movies.release_date.substring(0, 4)})
              </h2>
              <p className="flex gap-4">
                <span>개봉일: {movies.release_date}</span>
                <span>평점: {movies.vote_average}</span>
              </p>
              <Buttons />
              <span className="text-lg break-words max-w-3xl">
                {description}
              </span>
            </div>
          </article>
        </div>

        <Videos />
      </main>
    </section>
  );
}

import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function MovieCard({ items }) {
  const navigate = useNavigate();
  const { poster_path, original_title, release_date, vote_average } = items;
  const imgURL = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <section
      onClick={() => navigate(`/movie/watch/${items.id}`, { state: items })}
    >
      <div>
        <img src={`${imgURL}`} alt={original_title} className="rounded-sm" />
        <article>
          <h2 className="font-bold">{original_title}</h2>
          <p className="text-gray-600 ">{release_date}</p>
          <span>
            ⭐ <b>{vote_average.toFixed(1)}</b>
          </span>
        </article>
      </div>
    </section>
  );
}

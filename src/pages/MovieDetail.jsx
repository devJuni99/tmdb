import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation } from 'react-router';
import { fetchApis } from '../api/fetchMovie';

export default function MovieDetail() {
  const { state: movies } = useLocation();
  const {
    isError,
    isLoading,
    data: detail,
  } = useQuery({
    queryKey: ['details', movies],
    queryFn: () => {
      const youtube = new fetchApis();
      return youtube.getMovieVideos(movies.id);
    },
  });

  console.log(movies);
  if (isError) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h2 className="font-bold text-3xl">
        내가 클릭한 티저 모음 몰아보기 Zip🔗
      </h2>
      <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-hidden">
        {detail.map((items, idx) => (
          <div
            key={items.id}
            className="aspect-video rounded overflow-hidden shadow-md"
          >
            <iframe
              title={detail[idx].name}
              src={`https://www.youtube.com/embed/${detail[idx].key}`}
              frameBorder="0"
              className="w-full h-full"
            />
          </div>
        ))}
      </article>

      <article></article>
    </section>
  );
}

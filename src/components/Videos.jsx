import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchApis } from '../api/fetchMovie';
import { useLocation } from 'react-router';

export default function Videos() {
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

  if (isError) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <article className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {detail.map((items, idx) => (
        <div
          key={items.id}
          className="aspect-video rounded overflow-hidden shadow-md"
        >
          <iframe
            title={detail[idx].name}
            src={`https://www.youtube.com/embed/${detail[idx].key}`}
            className="w-full h-full"
          />
        </div>
      ))}
    </article>
  );
}

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchApis } from '../api/fetchMovie';
import { useNavigate } from 'react-router';
export default function TrendMovies() {
  const navigate = useNavigate();
  const {
    data: trend,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['trend'],
    queryFn: async () => {
      const trend = new fetchApis();
      return trend.trendMovies();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading trend movies.</p>;

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        트렌드
      </h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex justify-center flex-nowrap gap-4">
          {trend
            ?.filter((items) => items.title && items.title.length <= 15)
            .map((videos) => (
              <div
                key={videos.id}
                className="flex-none w-32 sm:w-40 cursor-pointer transition-transform hover:scale-105"
                onClick={() =>
                  navigate(`/movie/watch/${videos.id}`, { state: videos })
                }
              >
                <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${videos.poster_path}`}
                    alt={videos.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-2 text-sm sm:text-base font-medium truncate text-center">
                  {videos.title}
                </h3>

                <div className="text-xs text-gray-500 text-center mt-1">
                  ⭐ {videos.vote_average?.toFixed(1)}
                </div>

                <div className="text-xs text-gray-500 text-center mt-1">
                  {videos.release_date}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

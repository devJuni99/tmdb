import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchApis } from '../api/fetchMovie';
import { useLocation } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Videos() {
  const { state: movies } = useLocation();

  const {
    isError,
    isLoading,
    data: detail,
  } = useQuery({
    queryKey: ['details', movies],
    queryFn: () => {
      const detail = new fetchApis();
      return detail.getMovieVideos(movies.id);
    },
  });

  if (isError) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-white font-bold text-4xl mb-6">
        내가 클릭한 영화의 티저를 몰아보기🍿
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {detail.slice(0, 5).map((items) => (
          <SwiperSlide key={items.id}>
            <div className="aspect-video rounded overflow-hidden shadow-md">
              <iframe
                title={items.name}
                src={`https://www.youtube.com/embed/${items.key}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

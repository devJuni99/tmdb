import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import MovieCard from '../components/MovieCard';
import { FakeMovies } from '../api/fakeMovies';
import { fetchApis } from '../api/fetchMovie';

export default function Movies() {
  const { keyword } = useParams();

  const {
    isError,
    isLoading,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const movies = new fetchApis();
      return movies.search(keyword);
    },
  });

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4 bg-gray-100">
      {isError && <p>Error...</p>}
      {isLoading && <p>Loading...</p>}
      {videos &&
        videos.map((items) => <MovieCard key={items.id} items={items} />)}
    </div>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4">
      <p className="text-sm">© 2025 TMDB. All rights reserved.</p>
      <p className="text-xs mt-1">
        Powered by{' '}
        <a
          href="https://www.themoviedb.org/"
          className="text-cyan-400 hover:underline"
        >
          The Movie Database (TMDB)
        </a>
      </p>
    </footer>
  );
}

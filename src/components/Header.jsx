import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movie/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="p-4 bg-slate-800 flex flex-col sm:flex-row justify-center items-center gap-4 sm:justify-between">
      <Link to="/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
          width="140"
        />
      </Link>

      <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 font-bold text-white">
        <li>
          <Link to="/">영화</Link>
        </li>
        <li>
          <Link>TV 프로그램</Link>
        </li>
        <li>
          <Link>인물</Link>
        </li>
        <li>
          <Link>More</Link>
        </li>
      </ul>
      {/* 디바운스: 검색기능을 단어하나씩 칠 떄 마다 호출을 지연하는 기술 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="좋아하시는 영화를 입력해보세요!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="basis-36 h-12 px-4 pr-10 border-[2px] border-grey-900 rounded-full focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <button className="ml-2 ">
          <FaSearch className="text-white cursor-pointer" />
        </button>
      </form>
    </header>
  );
}

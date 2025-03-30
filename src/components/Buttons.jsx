import React from 'react';
import { FaList, FaHeart, FaBookmark } from 'react-icons/fa';

const buttons = [
  { label: 'List', icon: <FaList /> },
  { label: 'Like', icon: <FaHeart /> },
  { label: 'Watchlist', icon: <FaBookmark /> },
];

export default function Buttons() {
  return (
    <div className="flex">
      {buttons.map((value, idx) => (
        <button
          className="w-10 h-10 mr-2 rounded-full bg-slate-800 flex justify-center items-center hover:brightness-200 duration-500 hover:scale-125"
          key={idx}
        >
          {value.icon}
        </button>
      ))}
    </div>
  );
}

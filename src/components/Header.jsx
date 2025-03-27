import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    const { keyword } = useParams();
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/movie/${text}`);
    };

    useEffect(() => setText(keyword || ""), [keyword]);

    return (
        <header>
            <Link to="/">
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="logo"
                    height="20"
                />
            </Link>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="좋아하시는 영화를 입력해보세요!"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>
                    <FaSearch />
                </button>
            </form>
        </header>
    );
}

import React from "react";
import { useParams } from "react-router";

export default function Movies() {
    const { keyword } = useParams();

    return <div>Movies {keyword ? `🔎 ${keyword}` : "🔥"}</div>;
}

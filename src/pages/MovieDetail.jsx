import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router";
import { fetchApis } from "../api/fetchMovie";

export default function MovieDetail() {
    const { state: movies } = useLocation();
    const {
        isError,
        isLoading,
        data: detail,
    } = useQuery({
        queryKey: ["details", movies],
        queryFn: () => {
            const youtube = new fetchApis();
            return youtube.getMovieVideos(movies.id);
        },
    });
    console.log(detail);
    if (isError) return <p>Error...</p>;
    if (isLoading) return <p>Loading...</p>;

    return <div></div>;
}

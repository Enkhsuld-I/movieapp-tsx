"use client";
import Image from "next/image";
import { ThemeToggler } from "@/components/home/ToggleTheme";
import { BigMovie, Header, Moviecard } from "@/components/home/";
// import Movie from "@/components/home/Api";
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

const getMoviesList = async (listName: string) => {
  console.log(process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${listName}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const upcomingMovies: movieResponseType = await getMoviesList("now_playing");
console.log(upcomingMovies);

export default function Home() {
  return (
    <div className=" w-[1440px] m-auto">
      <div>
        <Header></Header>
        <BigMovie></BigMovie>
        <ThemeToggler />
      </div>
      <div>
        {upcomingMovies.results.map((movie) => (
          <div>
            <Moviecard
              title={movie.title}
              Score={movie.vote_average}
              Image={movie.poster_path}
            ></Moviecard>
          </div>
        ))}
      </div>
    </div>
  );
}

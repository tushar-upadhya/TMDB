"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface IMovie {
  poster_path: string;
  title: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  original_language: string;
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
  video: { results: [{ type: string; key: string }] };
}

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [movie, setMovie] = useState<IMovie>();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    setIsImageLoading(true);

    let searchMovie = searchParams.get("movie");

    if (searchMovie === null) {
      searchMovie = "avengers";
    }

    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          query: searchMovie,
        },
      })
      .then((res) => {
        axios
          .get(
            `https://api/themoviedb.org/3/movie/${res?.data?.results[0]?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
          )
          .then((res) => {
            setMovie(res.data);
            setIsLoading(false);
            console.log(res.data);
          });
      });
  }, []);

  return (
    <div className="bg-secondary relative px-4 md:px-0">
      {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}

      <div className="container mx-auto min-h-[calc(100vh-77px)] flex items-center relative">
        <div className="flex-col lg:flex-row flex gap-10 lg:mx-10 py-20">
          <div className="mx-auto flex-none relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500/?${movie?.poster_path}`}
              width={700}
              height={700}
              className="w-[300px] object-cover"
              onLoadingComplete={() => setIsImageLoading(false)}
              priority
              alt="image"
            />

            {isImageLoading && <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

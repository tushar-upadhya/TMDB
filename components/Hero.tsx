"use client";

import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

interface IMovie {}

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<IMovie>();

  return (
    <div className="bg-secondary relative px-4 md:px-0">
      {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}

      <div className="container mx-auto min-h-[calc(100vh-77px)] flex items-center relative">
        <div className="flex-col lg:flex-row flex gap-10 lg:mx-10 py-20">
          <div className="mx-auto flex-none relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500/?${movie?.poster_path}`}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

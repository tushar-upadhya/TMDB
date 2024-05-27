"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleMovieSearches = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?movie=${input}`);
    setInput("");
  };
  return (
    <div className="bg-yellow-50 py-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-[30px] font-medium">Logo</div>
        </Link>

        <div className="flex justify-between items-center">
          <form onSubmit={handleMovieSearches}>
            <div className="space-x-4">
              <input
                className="py-2 px-4 outline-none placeholder:text-textColor"
                value={input}
                placeholder="Search for movies"
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit" variant={"outline"}>
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

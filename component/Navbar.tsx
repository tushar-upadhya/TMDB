"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`?movie=${input}`);
    setInput("");
  };

  return (
    <div className="bg-primary pt-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-[30px] font-medium">Logo</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

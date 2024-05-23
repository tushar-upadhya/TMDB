import { CommonCardType } from "@/types";
import MovieListHeader from "./MovieListHeader";
import MovieListBodyScroll from "./MovieListBodyScroll";
import MovieListBodyCarousel from "./MovieListBodyCarousel";

interface IMovieListContainerProps {
  title: string;
  data: CommonCardType[] | null;
  headerRight?: React.ReactNode;
  type?: "scroll" | "carousel";
  pagination?: boolean;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

const MovieListContainer = ({
  title,
  headerRight,
  data,
  type = "scroll",
  pagination = false,
  setCurrentPage,
}: IMovieListContainerProps) => {
  return (
    <div className="mx-16 my-24 font-semibold text-accent">
      <MovieListHeader title="title" headerRight={headerRight} />

      <div className="my-6 min-h-full">
        {data &&
          (type === "scroll" ? (
            <MovieListBodyScroll
              data={data}
              pagination={pagination}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <MovieListBodyCarousel data={data} />
          ))}
      </div>
    </div>
  );
};

export default MovieListContainer;

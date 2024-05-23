interface IMovieListHeader {
  title: string;
  headerRight?: React.ReactNode;
}

const MovieListHeader = ({ title, headerRight }: IMovieListHeader) => {
  return (
    <>
      <div className="flex items-center font-primary text-accent">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="flex justify-center items-center">{headerRight}</div>
      </div>
    </>
  );
};

export default MovieListHeader;

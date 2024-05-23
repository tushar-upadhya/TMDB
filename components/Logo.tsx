const Logo = ({ size = 48 }: { size?: 48 | 72 | 128 }) => {
  return (
    <div
      className="flex items-center justify-center font-primary text-accent"
      style={{ fontSize: `${size}px` }}
    >
      <span className="font-semibold subpixel-antialiased">Movie</span>
      <span className="ml-1 font-bold -tracking-widest">Hub</span>
    </div>
  );
};

export default Logo;

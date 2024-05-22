const Logo = ({ size = 48 }: { size?: 48 | 72 | 128 }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ fontSize: `${size}px` }}
    >
      <span className="font-bold text-primary subpixel-antialiased">Movie</span>
      <span className="ml-1 font-bold -tracking-widest text-white">Hub</span>
    </div>
  );
};

export default Logo;

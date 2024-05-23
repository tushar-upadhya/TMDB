import Link from "next/link";
import Dashboard from "./Dashboard";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-6 shadow-md ">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* logo & social Icon */}
          <div className="flex items-center gap-8 justify-center xl:w-max">
            {/* logo */}
            <Link href={"/"}>
              <Image src={""} width={70} height={70} alt="logo" />
            </Link>
          </div>

          {/* sign In & SignUp */}
          <div className="flex items-center justify-center gap-8 xl:w-max">
            {/* mobile */}
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
            {/* desktop */}
            <div className="hidden xl:flex">
              <DesktopNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="my-12 flex w-[40%] flex-col items-center justify-center rounded-2xl bg-sky-950 p-12">
      <div className="mb6">
        <Logo size={72} />
      </div>

      <Button>
        <Link href={"/"} className="flex items-center justify-center text-lg">
          Browse All Movies & Series <ArrowRight className="ml-4" />
        </Link>
      </Button>
    </div>
  );
};

export default Dashboard;

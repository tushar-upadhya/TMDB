import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="my-5 flex w-full flex-col items-center justify-center p-12">
      <div className="mb-6">
        <Logo size={72} />
      </div>

      <Button>
        <Link
          href={"/"}
          className="flex items-center justify-center text-lg font-secondary text-accent"
        >
          Browse All Movies & Series <ArrowRight className="ml-4" />
        </Link>
      </Button>
    </div>
  );
};

export default Dashboard;

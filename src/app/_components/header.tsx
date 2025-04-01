import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="pt-8 bg-gray-200">
      <div className="container mx-auto px-10">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-10 mb-10 flex items-center">
        <Link href="/" className="hover:underline">
        {SITE_NAME}
        </Link>
        .
      </h2>
      </div>
    </div>
  );
};

export default Header;

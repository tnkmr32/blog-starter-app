import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className="pt-8 bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800 mb-10">
      <div className="container mx-auto max-w-5xl px-10">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-10 flex items-center">
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

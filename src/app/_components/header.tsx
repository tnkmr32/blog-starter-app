import { SITE_NAME } from "@/lib/constants";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-sm shadow-md">
      <h2>
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="hover:underline">
            <p className="text-base">{SITE_NAME}</p>
          </Link>
          {/* TODO: ボタンタップでメニュー表示 */}
          <Bars3Icon className="size-md" />
        </div>
      </h2>
    </div>
  );
};

export default Header;

import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="p-sm shadow-md">
      <h2>
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="text-base hover:underline">
            {SITE_NAME}
          </Link>
          {/* TODO: ボタンタップでメニュー表示 */}
          <Bars3Icon className="size-md" />
        </div>
      </h2>
    </div>
  );
};

export default Header;

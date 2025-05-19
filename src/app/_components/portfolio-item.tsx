import { title } from "process";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  src: string;
};

function PortfolioItem(props: Props) {
  const image = (
    <Image
      src={props.src}
      alt={`Cover Image for ${title}`}
      width={240}
      height={160}
    />
  );
  return (
    <Link href={`/portfolio/${props.slug}`}>
      <div className="w-[240px] h-[160px] relative flex-shrink-0 shadow-sm ">
        {image}
        <div className="absolute bottom-none right-none px-sm pb-sm">
          <p className="text-outline-white text-white">{props.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioItem;

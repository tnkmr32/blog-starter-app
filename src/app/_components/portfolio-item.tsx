import { title } from "process";

import Image from "next/image";

type Props = {
  title: string;
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
    <div className="w-[240px] h-[160px] bg-grey relative flex-shrink-0">
      <div className="absolute bottom-none right-none px-sm">{props.title}</div>
    </div>
  );
}

export default PortfolioItem;

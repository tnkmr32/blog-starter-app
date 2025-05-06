import Image from "next/image";
import blogPic from "../../../public/assets/rectangle-90x60.png";

type Props = {
  imgSrc: string;
  title: string;
  date: string;
};

function BlogItem({ imgSrc, title, date }: Props) {
  return (
    <div className="w-[300px] h-max flex flex-row gap-sm shadow-md p-sm rounded-md">
      {/* TODO: imgSrcを適応する修正 */}
      <Image
        src={blogPic}
        alt={title}
        width={90}
        height={60}
        className="flex-shrink-0"
      />
      <div className="w-full flex flex-col justify-between">
        <p className="line-clamp-2">{title}</p>
        <div className="text-sm text-grey">{date}</div>
      </div>
    </div>
  );
}

export default BlogItem;

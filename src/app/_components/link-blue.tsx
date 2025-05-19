import Link from "next/link";

type LinkBlueProps = {
  text: string;
  href: string;
};

function LinkBlue({ text, href }: LinkBlueProps) {
  return (
    <div className="flex flex-row justify-end pb-sm">
      <Link href="/" className=" w-max hover:underline">
            <p className="text-accent">{text}</p>
          </Link>
    </div>
  );
}

export default LinkBlue;
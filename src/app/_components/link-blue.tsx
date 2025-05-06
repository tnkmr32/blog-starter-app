import Link from "./link";

type LinkBlueProps = {
  text: string;
  href: string;
};

function LinkBlue({ text, href }: LinkBlueProps) {
  return (
    <div className="flex flex-row justify-end pb-sm">
      <Link href={href} className="text-accent w-max">
        {text}
      </Link>
    </div>
  );
}

export default LinkBlue;
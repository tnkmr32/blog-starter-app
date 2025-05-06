import classNames from "classnames";
import NextLink from "next/link";

type Props = {
  href:string;
  className?: string;
  children?: React.ReactNode | undefined;
};

const Link = ({href, className, children}: Props) => {
  return (
    <NextLink href={href} className={classNames("hover:underline", className)}>
      {children}
    </NextLink>
  );
};

export default Link;

import classNames from "classnames";
import NextLink from "next/link";

type Props = {
  href:string;
  className?: string;
  children?: React.ReactNode | undefined;
};

const Link = (props: Props) => {
  return (
    <NextLink href={props.href} className={classNames("hover:underline", props.className)}>
      {props.children}
    </NextLink>
  );
};

export default Link;

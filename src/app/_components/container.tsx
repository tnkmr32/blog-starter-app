type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-5xl px-10">{children}</div>;
};

export default Container;

import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    // TODO: レスポンシブ対応の＠mediaを設定する
    <div className={classNames("px-sm flex flex-col gap-sm", props.className)}>
      {props.children}
    </div>
  );
};

export default Container;

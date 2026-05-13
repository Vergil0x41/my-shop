import "./Skeleton.scss"

type Props = {
  width?: string;
  height?: string;
};

export const Skeleton = ({ width = "100%", height = "20px" }: Props) => {
  return (
    <div
      className="skeleton"
      style={{ width, height }}
    />
  );
};
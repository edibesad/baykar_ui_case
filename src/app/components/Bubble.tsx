import { Property } from "csstype";

export const Bubble = ({
  width,
  height,
  top,
  left,
  bottom,
  right,
  zIndex,
  rotate,
  className,
}: {
  className?: string | undefined;
  width?: Property.Width<string | number> | undefined;
  height?: Property.Height<string | number> | undefined;
  top?: Property.Top<string | number> | undefined;
  left?: Property.Left<string | number> | undefined;
  bottom?: Property.Bottom<string | number> | undefined;
  right?: Property.Right<string | number> | undefined;
  zIndex?: Property.ZIndex | undefined;
  rotate?: Property.Rotate | undefined;
}) => {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-tr from-[#4361EE00] to-[var(--colour-1)] opacity-50 ${className}`}
      style={{
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height,
        zIndex: zIndex,
        transform: rotate ? `rotate(${rotate})` : undefined,
      }}
    />
  );
};

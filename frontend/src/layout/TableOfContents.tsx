import { FC, HTMLAttributes } from "react";
import { ThemeMenu } from "./ThemeMenu";

interface TableOfContentsProps extends HTMLAttributes<HTMLDivElement> {}

export const TableOfContents: FC<TableOfContentsProps> = ({
  className,
  ...divProps
}) => {
  return (
    <div
      className={`table-of-contents ${className || ""}`}
      {...divProps}
    >
      <ThemeMenu />
    </div>
  );
};

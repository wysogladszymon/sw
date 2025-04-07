import { FC } from "react";

interface BookProps {
  imgUrl: string;
}

export const Book: FC<BookProps> = ({ imgUrl }) => {
  return (
    <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg">
      <img
        src={imgUrl}
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

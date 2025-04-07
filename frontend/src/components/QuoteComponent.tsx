import { QuoteInterface } from "@/data/quoteData";
import { Card, CardContent, CardFooter } from "./ui/card";
import { FC } from "react";

interface QuoteComponentProps{
  quote : QuoteInterface;
}

export const QuoteComponent : FC<QuoteComponentProps> = ({ quote }) => {
  return (
    <Card 
      className="h-72 min-w-[260px] p-4 flex flex-col justify-between shadow-md rounded-2xl border-none text-[#1C2A39] dark:text-white transition-all ease-in-out duration-300 hover:scale-105 hover:-translate-y-2"
      style= {{
        border: "none",
        background: "none",
        boxShadow: "none",
      }}
    >
      <CardContent className="text-lg italic font-serif">
        “{quote.content}”
      </CardContent>
      <CardFooter className="text-sm text-right font-light text-gray-500 dark:text-gray-300 ">
        {quote.author}
      </CardFooter>
    </Card>
  );
};

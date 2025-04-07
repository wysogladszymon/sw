import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { QuoteComponent } from "@/components/QuoteComponent";
import { quotes } from "@/data/quoteData";

export const QuoteSection = () => {
  return (
    <section className="quote w-full relative">
      <h2>My Inspirations</h2>
      <InfiniteCarousel duration={quotes.length * 4}>
        {[...quotes, ...quotes].map((quote, index) => (
          <QuoteComponent quote={quote} key={index}/>
        ))}
      </InfiniteCarousel>
    </section>
  );
};

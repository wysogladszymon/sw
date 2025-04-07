import { Book } from "@/components/Book";
import {bookUrls} from "../../data/bookData";
import styles from "./BookSection.module.css";

export const BookSection = () => {
  return (
    <section className='m-0'>
      <h2>Influential Books</h2>
      <p className='text-center'> I am real book enjoyer. This is my favourite sample.</p>
        <div className={styles.book_container}>
          {bookUrls.map((bookUrl, i) => <Book key={i} imgUrl={bookUrl}/>)}
        </div>
    </section>
  );
};

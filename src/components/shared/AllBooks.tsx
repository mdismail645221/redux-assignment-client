import { useEffect, useState } from "react";
import { IAllBooks } from "../../globalTypes/globalType";
import SingleBook from "../SingleBook";
import SectionTitle from "../SectionTitle";

const AllBooksPage = () => {

    const [allBooks, setAllbooks] = useState<IAllBooks[]>([]);

    useEffect(()=> {
        fetch('/book.json')
        .then(res => res.json())
        .then(data => setAllbooks(data))
    }, [])




    return (
       <section className="container py-[60px]">
            <div>
                <SectionTitle  headingOne="OUR TRANDING BOOKS" headingTwo="A Practical Guide for Achieving Your Goals" />
            </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
             {allBooks.map((book:IAllBooks)=> (
                <SingleBook key={book.id} book={book} />
             ))}
        </div>
       </section>
    );
};

export default AllBooksPage;
import React from "react";
import { IAllBooks } from "../globalTypes/globalType";
import { Card } from "antd";
import { Link } from "react-router-dom";

interface Props {
  book: IAllBooks;
}

const SingleBook: React.FC<Props> = ({ book }) => {



  return (
    <Card
    hoverable
    style={{ width: "100%", height: "100%", overflow: "hidden"}}
    cover={<img alt="example" src={book.img} />}
  >
    <div className="card-body bg-[#001524]">
        
        <ul>
            <li className="text-white text-base"><span><strong>Title : </strong></span>{book.Title}</li>
            <li className="text-white text-base"><span><strong>Author : </strong></span>{book.Author}</li>
            <li className="text-white text-base"><span><strong>Genre : </strong></span>{book.Genre}</li>
            <li className="text-white text-base"><span><strong>Publication Date : </strong></span>{book["Publication Date"]}</li>
            <li className="text-white text-base"><span><strong>UserEmail : </strong></span>{book.userEmail}</li>
        </ul>

        <div>
            <Link className="py-2 text-center w-full bg-white mt-5 rounded-3xl" to='/'>SEE DETAILS</Link>
        </div>

    </div>
    
  </Card>
  );
};

export default SingleBook;
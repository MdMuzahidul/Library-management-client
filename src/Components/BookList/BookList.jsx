import React, { useContext } from "react";
import { HendleContext } from "../../UseContext/HendleProvider";

const BookList = () => {
  const { booklist, setBooklist } = useContext(HendleContext);
  const addnumber = () => {
    setBooklist(...booklist, { id: 1, name: "book1" });
  };
  console.log(booklist);
  return (
    <div>
      <h1>Book List</h1>
      <p>List of books will be displayed here.</p>
      <button className="btn" onClick={addnumber}>
        {" "}
        add number
      </button>
    </div>
  );
};

export default BookList;

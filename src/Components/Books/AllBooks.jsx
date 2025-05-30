import { useContext, useEffect, useState } from "react";
import { HendleContext } from "../../UseContext/HendleProvider";
import BookCard from "./BookCard";

const AllBooks = () => {
  const { books, setBooks } = useContext(HendleContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 51;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/books?page=${page}&limit=${pageSize}`
        );
        const result = await res.json();
        console.log("Fetched books:", result.books);
        // Assuming backend returns { data: [...], total: number }
        setBooks(result.books || []);
        setTotalPages(Math.ceil((result.totalPages || 0) / pageSize));
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, [page, setBooks]);

  return (
    <div>
      <h3 className="text-3xl uppercase font-extrabold text-blue-700 text-center my-5" >Explor Books</h3>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      ) : (
        <p>No books available</p>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-center my-6 gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 btn btn-primary rounded"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="btn btn-primary px-4 py-2 rounde"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;

import { selectBooks } from "@/redux/features/books/bookSlice"
import { useAppSelector } from "@/redux/hooks"


export default function BorrowSummary() {
  const books = useAppSelector(selectBooks)
  console.log(books)
  return (
    <div>
      <h1>Borrow Summary Page</h1>
      <div>
        {
          books.map((book) =>(
            <div key={book.author}>
              <h2>Title: {book.title}</h2>
              <p>Author: {book.author}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

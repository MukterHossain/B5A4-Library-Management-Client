import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/libraryApi"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router"

export default function AllBooks() {
  const { data: books, isLoading } = useGetBooksQuery( )
  const [deleteBook] = useDeleteBookMutation()
  console.log(books)
 


  return (
    <div>
      <div className="flex justify-between items-center gap-x-5">
        <h1 className="text-2xl font-bold my-4">All Books</h1>
       <button className="bg-green-700 py-2 px-4 rounded duration-300 text-white font-bold text-[16px] hover:bg-green-600"> 
        <Link to={`/create-book`} className="">Add Book</Link>
        </button>
      </div>
      
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Copies</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books?.data.map((book) => (
          <TableRow key={book._id}>
            <TableCell className="font-medium">{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.copies}</TableCell>
            <TableCell>{book.copies ? "YES" : "NO"}</TableCell>
            <TableCell className="text-right space-x-2">
              <Link to={`/edit-book/${book._id}`} className="bg-blue-200">Edit</Link>
              <button onClick={() =>book._id && deleteBook(book._id)}>Delete</button>
              <Link to={`/borrow/${book._id}`} className="bg-blue-400">Borrow</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}

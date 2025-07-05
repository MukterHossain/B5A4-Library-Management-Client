import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/libraryApi"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router";
import Swal from 'sweetalert2'
import { cn } from "@/lib/utils";

type BookData = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
  description?: string;
}

export default function AllBooks() {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined)
  const [deleteBook] = useDeleteBookMutation()

  // console.log(books)
  const handleDelete = async (id: string) => {
    const result = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if ((await result).isConfirmed) {
      try {
        const res = await deleteBook(id).unwrap()
        Swal.fire({
          title: "Deleted!",
          text: res.message || "Your file has been deleted.",
          icon: "success"
        });
      } catch (error) {

        console.log(error)
      }
    }
  }

  if (isLoading) return <p className="text-lg text-center mt-10 sm:mt-20 text-blue-700"> Data Loading...</p>

 
  if (isError) return <p className="text-lg text-center mt-10 sm:mt-20 text-red-700"> Something went wrong! or Data not found...</p>

  return (
    <div>
      <div className="flex justify-between items-center gap-x-5">
        <h1 className="text-2xl font-bold my-4">All Books:  ({books?.data?.length})</h1>
        <button className="bg-green-700 py-2 px-4 rounded duration-300 text-white font-bold text-[16px] hover:bg-green-600">
          <Link to={`/create-book`} className="">Add Book</Link>
        </button>
      </div>

      <div>
        {
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
              {books?.data.map((book: BookData) => (
                <TableRow key={book._id}>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.isbn}</TableCell>
                  <TableCell>{book.copies}</TableCell>
                  <TableCell className={cn("text-red-600 font-bold",book.copies >0 && "text-green-600 font-bold")}>{book.copies ? "Available" : "Unavailable"}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link to={`/books/${book._id}`} className="bg-purple-800 hover:bg-purple-600 py-1 px-2 rounded-sm duration-300 text-white">View</Link>
                    <Link to={`/edit-book/${book._id}`} className="bg-blue-800 hover:bg-blue-600 py-1 px-2 rounded-sm duration-300 text-white">Edit</Link>
                    <button  onClick={() => handleDelete(book._id)} className="bg-pink-800 hover:bg-pink-600  py-1 px-2 rounded-sm duration-300 text-white">Delete</button>
                    <Link  to={book.copies ===0 ? "#" : `/borrow/${book._id}`} className={`bg-green-800 hover:bg-green-600 duration-300 py-1 px-2 rounded-sm text-white ${book.copies == 0 && 'cursor-not-allowed'}`}>Borrow</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    </div>
  )
}

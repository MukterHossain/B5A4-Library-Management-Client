import { useGetBookQuery } from "@/redux/api/libraryApi";
import { useParams } from "react-router";


export default function DetailsBook() {
    const { id } = useParams()
    const { data: books, isLoading } = useGetBookQuery(id!)
    // console.log(books)
    const book = books?.data

    if (isLoading) return <p className="text-lg  text-center mt-10 sm:mt-20 text-blue-700"> Data Loading...</p>
    return (
        <div className="max-w-3xl mx-auto bg-blue-100 duration-300 hover:bg-blue-200 p-5 rounded-lg ">
            <h1 className="text-2xl sm:text-3xl font-bold my-4 text-center dark:text-gray-700 underline"> Book Details </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 mt-5 dark:text-gray-900">
                <div>
                    <h1 className=" text-lg ">Title: <span className="font-bold  sm:text-2xl">{book.title ? book.title : "Title not found"}</span></h1>
                    <p className="text-lg ">Author: <span className="font-bold  sm:text-2xl">{book.author ? book.author : "Title name not found"}</span></p>
                    <p className="text-lg ">Genre: <span className="font-bold  sm:text-2xl">{book.genre ? book.genre : "Genre not found"}</span></p>
                    <p className="text-sm sm:text-lg ">ID: <span className="font-medium ">{book._id ? book._id : "Id not found"}</span></p>
                </div>
                <div>

                    <p className="text-sm sm:text-lg ">ISBN: <span className="font-medium ">{book.isbn ? book.isbn : "ISBN not found"}</span></p>
                    <p className="text-sm sm:text-lg ">Copies: <span className="font-medium ">{book.copies ? book.copies : "Copies not found"}</span></p>
                    <p className="text-sm sm:text-lg ">CreatedAt: <span className="font-medium ">{book.createdAt ? book.createdAt : "CreatedAt not found"}</span></p>
                    <p className="text-sm sm:text-lg">UpdatedAt: <span className="font-medium ">{book.updatedAt ? book.updatedAt : "Data not updated"}</span></p>
                </div>
            </div>
            <p className="text-sm sm:text-lg dark:text-gray-900">Description: <span className="font-medium ">{book.description ? book.description : "Data not updated"}</span></p>
        </div>
    )
}

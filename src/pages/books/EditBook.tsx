import { useGetBookQuery, useUpdateBookMutation } from "@/redux/api/libraryApi";
// import type { Book } from "@/types";
// import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from 'sweetalert2'


export default function EditBook() {
    const { id } = useParams()
    const navigete = useNavigate();
    const { data, isLoading } = useGetBookQuery(id!)
    const [updateBook] = useUpdateBookMutation()
    const book = data?.data
    console.log(book)



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form)
        const copiesValue = formData.get("copies")
        const copies = copiesValue ? parseInt(copiesValue as string) : 0;
        if (copies < 0) {
            alert("Copies must be positive number")
        }
        const updatedBook = {
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            genre: formData.get("genre") as string,
            isbn: formData.get("isbn") as string,
            description: formData.get("description") as string,
            copies,
            available: copies > 0 ? true : false
        }
        try {
            const res = await updateBook({ id: id!, data: updatedBook }).unwrap()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: res?.message || "Book update successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigete("/books")
        } catch (error) {
            alert("Something went wrong!")
            console.log(error)
        }
    }
    if (isLoading) return <p>Loading...</p>
    if (!book) return <p>Book not found</p>
    return (
        <div>
            <h1>Update Data</h1>
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="mb-4 w-full border p-3">
                            <input type="text" name="title" defaultValue={book.title} placeholder="Title" className="outline-0" required />
                        </div>
                        <div className="mb-4 w-full border p-3">
                            <input type="text" name="author" defaultValue={book.author} placeholder="Author" className="outline-0" required />
                        </div>
                        <div className="mb-4 w-full border p-3">
                            <input type="text" name="genre" defaultValue={book.genre} placeholder="Genre" className="outline-0" required />
                        </div>
                        <div className="mb-4 w-full border p-3">
                            <input type="text" name="isbn" defaultValue={book.isbn} placeholder="ISBN" className="outline-0" required />
                        </div>
                        <div className="mb-4 w-full border p-3">
                            <textarea name="description" defaultValue={book.description} placeholder="Description" className="outline-0"></textarea>
                        </div>
                        <div className="mb-4 w-full border p-3">
                            <input type="number" name="copies" defaultValue={book.copies} placeholder="Copies" className="outline-0" required />
                        </div>

                    </div>
                    <div className=" flex justify-end">
                        <button type="submit" className="bg-blue-600 duration-300 text-white px-4 py-2 rounded-sm font-bold hover:bg-blue-500">Update Book</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

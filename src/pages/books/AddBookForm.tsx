import { useAddBookMutation } from "@/redux/api/libraryApi"

import React, { useState } from "react";
import { useNavigate } from "react-router"
import Swal from 'sweetalert2'


export default function AddBookForm() {
    const [addBook, { data, isLoading }] = useAddBookMutation()
    const navigete = useNavigate();
    console.log(data)

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "copies" ? parseInt(value) : value,
        }))
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const copies = formData.copies ? parseInt(formData.copies) : 0
        if (copies < 0) {
            alert("Copies must be positive number")
        }
        try {
             await addBook(formData).unwrap()
            // console.log(res)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigete("/books")
        } catch (error) {
            console.log(error)
        }
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <div className="max-w-3xl mx-auto bg-gray-300 rounded-lg p-5">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-700">Add Books  </h1>
            <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="mb-4 w-full border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="outline-0 w-full " required />
                    </div>
                    <div className="mb-4 w-full border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="outline-0 w-full" required />
                    </div>
                    <div className="mb-4 w-full border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <select name="genre" value={formData.genre} onChange={handleChange} className="outline-0 w-full" required >
                            <option value="" disabled>Select Genre</option>
                            <option value="FICTION">FICTION</option>
                            <option value="NON_FICTION">NON FICTION</option>
                            <option value="SCIENCE">SCIENCE</option>
                            <option value="HISTORY">HISTORY</option>
                            <option value="BIOGRAPHY">BIOGRAPHY</option>
                            <option value="FANTASY">FANTASY</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" className="outline-0 w-full" required />
                    </div>
                    <div className="mb-4 w-full h-13 border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <input type="number" name="copies" value={formData.copies} onChange={handleChange} placeholder="Copies" className="outline-0 w-full " required />
                    </div>
                    <div className="mb-4 w-full border rounded-sm p-3 shadow bg-gray-50 dark:text-gray-900">
                        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="outline-0 w-full"></textarea>
                    </div>

                </div>
                <div className=" flex justify-end">
                    <button type="submit" className="bg-blue-600 duration-300 text-white px-4 py-2 rounded-sm font-bold hover:bg-blue-500">Add Book</button>
                </div>
            </form>
        </div>
    )
}

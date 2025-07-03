import { useAddBookMutation } from "@/redux/api/libraryApi"

import React, { useState } from "react";
import { useNavigate } from "react-router"


export default function AddBookForm() {
    const [addBook] = useAddBookMutation()
    const navigete = useNavigate();

    const [formData, setFormData] = useState<Book>({
        title:"",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: 0,
        available:true
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "copies" ? parseInt(value): value,
        }))
    }


    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        try {
            const res = await addBook(formData).unwrap()
            console.log(res)
            navigete("/books")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <h1>Add Form</h1>
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4 w-full border rounded-sm p-3">
                    <input type="text" name="title"  value={formData.title} onChange={handleChange} placeholder="Title" className="outline-0 w-full" required/>
                </div>
                <div className="mb-4 w-full border rounded-sm p-3">
                    <input type="text" name="author"  value={formData.author} onChange={handleChange} placeholder="Author" className="outline-0 w-full" required/>
                </div>
                <div className="mb-4 w-full border rounded-sm p-3">
                    <input type="text" name="genre"  value={formData.genre} onChange={handleChange} placeholder="Genre" className="outline-0 w-full" required/>
                </div>
                <div className="mb-4 w-full border rounded-sm p-3">
                    <input type="text" name="isbn"  value={formData.isbn} onChange={handleChange} placeholder="ISBN" className="outline-0 w-full" required/>
                </div>
                <div className="mb-4 w-full border rounded-sm p-3">
                    <textarea name="description"  value={formData.description} onChange={handleChange} placeholder="Description" className="outline-0 w-full"></textarea>
                </div>
                <div className="mb-4 w-full border rounded-sm p-3">
                    <input type="number" name="copies"  value={formData.copies} onChange={handleChange} placeholder="Copies" className="outline-0 w-full" required/>
                </div>
               
            </div>
            <div className=" flex justify-end">
                 <button type="submit" className="bg-blue-600 duration-300 text-white px-4 py-2 rounded-sm font-bold hover:bg-blue-500">Add Book</button>
            </div>
        </form>
      </div>
    </div>
  )
}

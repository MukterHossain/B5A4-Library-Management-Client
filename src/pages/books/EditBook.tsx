import { useGetBookQuery, useUpdateBookMutation } from "@/redux/api/libraryApi";
import type { Book } from "@/types";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"


export default function EditBook() {
    const {id} = useParams()
    const navigete = useNavigate();
    const {data: book, isLoading} = useGetBookQuery(id!)
    const [updateBook] = useUpdateBookMutation()
    console.log(book)


    const [formData, setFormData] = useState<Book>({
            title:"",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 0,
            available:true
        })
       
        // useEffect(() => {
        //   if(existingBook){
        //     setFormData(existingBook)
        //   }
        // }, [existingBook])

        // const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //         const {name, value} = e.target;
        //         setFormData((prev) => ({
        //             ...prev,
        //             [name]: name === "copies" ? parseInt(value): value,
        //         }))
        //     }
    
    const handleSubmit = async (e:React.FormEvent) =>{
      e.preventDefault();
      const form = e.currentTarget;
      //  const updatedBook = {
      //     title: form.title.value,
      //     author: form.author.vallue
      //   }
        try {
            const res = await updateBook({id: id!, data: formData}).unwrap()
            console.log(res)
            // navigete("/books")
        } catch (error) {
            console.log(error)
        }
    }
    if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <h1>Update Data</h1>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mb-4 w-full border p-3">
                    <input type="text" name="title"  placeholder="Title" className="outline-0" required/>
                </div>
                <div className="mb-4 w-full border p-3">
                    <input type="text" name="author"    placeholder="Author" className="outline-0" required/>
                </div>
                {/*  value={formData.genre} onChange={handleChange}  defaultValue={book.title}*/}
                <div className="mb-4 w-full border p-3">
                    <input type="text" name="genre" placeholder="Genre" className="outline-0" required/>
                </div>
                <div className="mb-4 w-full border p-3">
                    <input type="text" name="isbn"  placeholder="ISBN" className="outline-0" required/>
                </div>
                <div className="mb-4 w-full border p-3">
                    <textarea name="description" placeholder="Description" className="outline-0"></textarea>
                </div>
                <div className="mb-4 w-full border p-3">
                    <input type="number" name="copies"  placeholder="Copies" className="outline-0" required/>
                </div>
               
            </div>
             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Book</button>
        </form>
      </div>
    </div>
  )
}

import { useBorrowBookMutation, useGetBookQuery } from "@/redux/api/libraryApi";
import { useState } from "react";
import { useParams, useNavigate } from "react-router"
import Swal from 'sweetalert2'


export default function BorrowBook() {
    const { id } = useParams()
    const navigete = useNavigate();

    const { data: book, isLoading } = useGetBookQuery(id!)
    const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation()
    const [quantity, setQuantity] = useState(1);
    const [dueDate, setDueDate] = useState("");

    console.log(book)
    if (isLoading) return <p>Loading...</p>
    if (!book) return <p>Book not found</p>

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (quantity < 1 || quantity > book.data.copies) {
            alert(`Quantity must be between 1 and ${book.data.copies}`)
            return;
        }

        if (!dueDate) {
            alert("Plese select a due date")
        }
        try {
            const res = await borrowBook({ id: id!, quantity, dueDate }).unwrap()
            console.log(res)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book borrowed successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigete("/summary")
        } catch (error) {
            console.log(error)

            alert("Something went wrong!")
        }

    }
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center py-5">Borrow Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="mb-4 w-full border p-3">
                        <input type="number" name="quantity" placeholder="Quantity"
                            min={1} max={book.data.copies} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="outline-0 w-full" required />
                    </div>
                    <div className="mb-4 w-full border p-3">
                        <input type="date" name="date" placeholder="Author" value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)} className="outline-0 w-full" required />
                    </div>
                </div>
                <div className=" flex justify-end">
                    <button type="submit" disabled={isBorrowing} className="bg-blue-600 duration-300 text-white px-4 py-2 rounded-sm font-bold hover:bg-blue-500">Borrow Book</button>
                </div>
            </form>
        </div>
    )
}

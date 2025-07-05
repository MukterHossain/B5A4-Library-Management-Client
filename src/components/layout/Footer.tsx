import { Link } from "react-router"
import Logo from "../../assets/Logo.png"

export default function Footer() {
    return (
        <div className=" shadow-[0px_0px_20px_rgba(0,0,0,0.2)] dark:text-gray-800 bg-gray-50  rounded-md py-6">
            <div className="px-4">
                <Link to="/"><img src={Logo} alt="Logo" className="w-[50px] " /></Link>
                <div className="flex  gap-5 mt-2">
                    <div className="w-1/2 ">
                        <p className="text-sm">This is library management system where a person organize, track, and manage books, borrowers, and availability with ease.</p>
                    </div>
                    <div className="1/2 flex flex-start">
                        <div className="flex flex-col   text-sm  gap-x-2 sm:gap-x-2  text-blue-400 font-medium hover:text-blue-500">
                            <Link to="/books">All Books</Link>
                            <Link to="/create-book">Add Book</Link>
                            <Link to="/borrow-summary">Borrow Summary</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center mt-5">
                @ {new Date().getFullYear()} All rights rrserved
            </p>
        </div>
    )
}

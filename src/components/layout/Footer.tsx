import { Link } from "react-router"
import Logo from "../../assets/Logo.png"

export default function Footer() {
    return (
        <div className="shadow py-8">
            <div className="px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex  flex-start ">
                    <img src={Logo} alt="Logo" className="w-[50px] " />
                </div>
                <div className="flex-1">
                    <div className="flex justify-center text-[14px] sm:text-[16px] gap-x-2 sm:gap-x-2  text-blue-400 font-medium hover:text-blue-500">
                    <Link to="/books">All Books</Link>
                    <Link to="/create-book">Add Book</Link>
                    <Link to="/borrow">Borrow Summary</Link>
                </div>
                </div>
            </div>
            <p className="text-sm text-center ">
                @ {new Date().getFullYear()} All rights rrserved. <strong>BM</strong>
            </p>
        </div>
    )
}

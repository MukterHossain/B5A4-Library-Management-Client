import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import Logo from "../../assets/Logo.png"


export default function Navber() {
    return (
        <div className=" h-16  shadow-[0px_0px_20px_rgba(0,0,0,0.2)] dark:text-gray-800 border rounded-sm bg-gray-50 px-2 flex items-center mb-5">
            <div className="flex w-full justify-between items-center">
                <div className="flex  flex-start ">
                <img src={Logo} alt="Logo" className="w-[50px] "/>                  
                </div>
                <div className="flex justify-center text-[13px] sm:text-[16px] gap-x-2 sm:gap-x-4 w-4/5 font-bold">
                    <Link to="/books">All Books</Link>
                    <Link to="/create-book">Add Book</Link>
                    <Link to="/borrow-summary">Borrow Summary</Link>
                </div>
                <div>
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    )
}

import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";


export default function Navber() {
    return (
        <div className=" h-16 flex items-center gap-3 ">
            <div className="flex w-full justify-between ">
                <div className="flex  flex-start w-1/5">
                    <span className="font-extrabold text-2xl text-green-800">Logo</span>
                </div>
                <div className="flex justify-center gap-x-4 w-4/5 font-bold">
                    <Link to="/books">All Books</Link>
                    <Link to="/add-book">Add Book</Link>
                    <Link to="/borrow">Borrow Summary</Link>
                </div>
                <div>
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    )
}

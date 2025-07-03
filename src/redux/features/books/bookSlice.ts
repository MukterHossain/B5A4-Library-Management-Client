import type { RootState } from "@/redux/store"
import type { IBook } from "@/types"
import {createSlice} from "@reduxjs/toolkit"


interface InitialState {
    books:IBook[]
}
const initialState: InitialState ={
    books:[
        {
            title: "Hello World",
            author: "John Doe",
            genre: "Fiction",       
            isbn: "123-456-789",
            description: "A fascinating story about the world",
            copies: 5,
            available: true
        }
    ]
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {

    }
})

export const selectBooks = (state: RootState) =>{
    return state.book.books
}


export default bookSlice.reducer;



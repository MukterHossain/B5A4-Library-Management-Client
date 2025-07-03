import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import type { Book, Borrow } from "../../types";

export const librayApi = createApi({
    reducerPath:"librayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.API_BASE_URL || "http://localhost:5000/"
    }),
    tagTypes: ["Books", "Borrows"],
    endpoints: (builder) =>({
        getBooks: builder.query<Book[], void>({
            query: () => "/books",
            providesTags: ["Books"]
        }),
        getBook: builder.query<Book, string>({
            query: (id) => `/books/${id}`
        }),
        addBook: builder.mutation<Book, Partial<Book>>({
            query: (body) =>({
                url: "/books",
                method:"POST",
                body
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation<Book, {id: string, data: Partial<Book>}>({
            query: ({id, data}) =>({
                url: `/books/${id}`,
                method:"PUT",
                body : data
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation<{message: string}, string>({
            query: (id) =>({
                url: `/books/${id}`,
                method:"DELETE",
            }),
            invalidatesTags: ["Books"]
        }),

        // Borrow section
        borrowBook: builder.mutation<void, {
            bookId:string;
            quentity: number;
            dueDate: string;
        }>({
           query:({bookId, ...rest})=>({
            url: `borrow/${bookId}`,
            method: "POST",
            body:rest
           })
        }),
        getBorrowSummary: builder.query<Borrow[], void>({
            query: () => "borrow/summary",
            providesTags: ["Borrows"]
        })
    })
})


export const {
    useBorrowBookMutation,
    useGetBookQuery,  
    useAddBookMutation,
    useGetBooksQuery,
    useGetBorrowSummaryQuery,
    useUpdateBookMutation,
    useDeleteBookMutation
} = librayApi;





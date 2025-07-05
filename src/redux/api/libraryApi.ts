import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import type { Book, Borrow } from "../../types";

export const librayApi = createApi({
    reducerPath:"librayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
    }),
    
    tagTypes: ["Books", "Borrows"],
    endpoints: (builder) =>({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"]
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        addBook: builder.mutation({
            query: (bookData) =>({
                url: "/books",
                method:"POST",
                body : bookData
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
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
            id:string;
            quantity: number;
            dueDate: string;
        }>({
           query:({id, ...rest})=>({
            url: `borrow/${id}`,
            method: "POST",
            body:rest
           }),
           invalidatesTags: ["Borrows"]
        }),
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["Borrows"]
        }),
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





import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const librayApi = createApi({
    reducerPath:"librayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.API_BASE_URL || "http://localhost:5000/"
    }),
    tagTypes: ["Books", "Borrows"],
    endpoints: (builder) =>({
        getBooks: builder.query<Book[], void>({
            query: () => "books",
            providesTags: ["Books"]
        }),
        createBook: builder.mutation<void, Partial<Book>>({
            query: (book) =>({
                url: "books",
                method:"POST",
                body: book
            })
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
        getBorrowSummary: builder.query<BorrowSummary[], void>({
            query: () => "borrow/summary",
            providesTags: ["Borrows"]
        })
    })
})


export const {useBorrowBookMutation, useCreateBookMutation,useGetBooksQuery,useGetBorrowSummaryQuery} = librayApi;





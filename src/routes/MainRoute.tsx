import MainLayout from "@/components/layout/MainLayout";
import AddBookForm from "@/pages/books/AddBookForm";
import AllBooks from "@/pages/books/AllBooks";
import EditBook from "@/pages/books/EditBook";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import { createBrowserRouter } from "react-router";

export  const  router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        index: true,
        Component: AllBooks
      },
      {
        path: "books",
        Component: AllBooks
      },
      {
        path: "borrow",
        Component: BorrowSummary
      },
      {
        path: "/create-book",
        Component: AddBookForm
      },
      {
        path: "/edit-book/:id",
        Component: EditBook
      },
    ],
  },
]);
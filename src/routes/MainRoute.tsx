import Error from "@/components/layout/Error";
import MainLayout from "@/components/layout/MainLayout";
import AddBookForm from "@/pages/books/AddBookForm";
import AllBooks from "@/pages/books/AllBooks";
import DetailsBook from "@/pages/books/DetailsBook";
import EditBook from "@/pages/books/EditBook";
import BorrowBook from "@/pages/borrow/BorrowBook";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import { createBrowserRouter } from "react-router";

export  const  router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error> ,
    Component:MainLayout,
    children: [
      {
        index: true,
        Component: AllBooks
      },
      {
        path: "/books",
        Component: AllBooks
      },
      {
        path: "/books/:id",
        Component: DetailsBook
      },
      {
        path: "/create-book",
        Component: AddBookForm
      },
      {
        path: "/edit-book/:id",
        Component: EditBook
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary
      },
      {
        path: "/borrow/:id",
        Component: BorrowBook
      },
    ],
  },
]);
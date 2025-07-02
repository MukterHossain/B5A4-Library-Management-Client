import MainLayout from "@/components/layout/MainLayout";
import AddBook from "@/pages/books/AddBook";
import AllBooks from "@/pages/books/AllBooks";
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
        path: "add-book",
        Component: AddBook
      },
      {
        path: "borrow",
        Component: BorrowSummary
      },
    ],
  },
]);
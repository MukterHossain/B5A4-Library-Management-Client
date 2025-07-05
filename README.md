# B5A4-LIBRARY-MANAGEMENT-CLIENT

* [live link: https://library-management-client-lovat.vercel.app]
Library Management system where a person organize, track, and manage books, borrowers, and availability with ease.

## Setup Section

### Technologies Used

* **Redux**
* **React**
* **Redux Toolkit and RTK Query**  State Management
* **Shadcn ui**
* **Typescript**
* **tailwindcss**
* **Tailwind CSS**
* **sweetalert2**
  
  ### Set Environment Variables in **.env.local file**

* **API_BASE_URL**

## Features

* All books list in table
* Three action button Edit, Borrow and Delete books
* Borrow books with quantity and due date validation
* Automatically reduce book copiew and update availability
* Respnsive all page
* Ensure alert show for success message
* Create baseApi for all CRUD operation
* Add navbar and footer
* Easy navigation

## Page routes

* **/books** Displays all books data in table
* **/create-book** Create a Book
* **/books/:id** Show detailed single book data
* **/edit-book/:id** Update single book

* **/borrow/:id** Create a borrowed book with conditionaly
* **/borrow-summary** Borrowed Books Summary

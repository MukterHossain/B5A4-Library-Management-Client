import { useGetBorrowSummaryQuery } from "@/redux/api/libraryApi"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type BorrowData = {
  _id: string;
  title: string;
  isbn: string;
  totalQuantity: number
}


export default function BorrowSummary() {
  const { data: borrow, isLoading } = useGetBorrowSummaryQuery(undefined)
  // console.log(borrow)
  if (isLoading) return <p className="text-lg text-center mt-10 sm:mt-20 text-blue-700"> Data Loading...</p>
  return (
    <div className="max-w-2xl mx-auto bg-blue-100 duration-300 hover:bg-blue-200 p-5 rounded-lg  ">
      <div className="flex justify-between items-center gap-x-5 ">
        <h1 className="text-2xl font-bold my-4 dark:text-gray-900 underline">Borrow Summary</h1>
      </div>
      <div className="dark:text-gray-900">
        {
          borrow?.data > 0 ? isLoading : <Table>
            <TableHeader >
              <TableRow >
                <TableHead className="w-[100px] dark:text-gray-900">Title</TableHead>
                <TableHead className="dark:text-gray-900">ISBN</TableHead>
                <TableHead className="dark:text-gray-900">Total Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrow?.data?.map((item: BorrowData) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.isbn}</TableCell>
                  <TableCell>{item.totalQuantity}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      </div>
    </div>
  )
}

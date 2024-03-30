"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
  filename: string
  created_date: string
  created_time: string
}

export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "Creation Date",
    header: "created_date",
  },
  {
    accessorKey: "Creation Time",
    header: "created_time",
  },
]

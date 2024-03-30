"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import {useState,useEffect} from "react";

export default function DemoPage() {
    const [data,setData] = useState([]);
    const {user}:any = useKindeBrowserClient();

    useEffect(()=>{
        const formData = new FormData();
        formData.append("user_id",user?.id);
        console.log(formData);
        fetch("https://73cd-103-97-166-170.ngrok-free.app/dashboard", {
        method: "POST",
        body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("Success:", result);
            setData(result.data.table_data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    },[])

//   const data =[
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

"use client";

import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import {useState,useEffect} from "react";

export default function DemoPage({user_id}:any) {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const formData = new FormData();
        formData.append("user_id","kp_eeae8228fa484dd28c0bf9293a30a56d");
        fetch("https://a978-115-248-146-117.ngrok-free.app/dashboard", {
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

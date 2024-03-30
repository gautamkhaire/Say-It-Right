import BarChart from "../Charts/BarChart";
import DoughnutChart from "../Charts/DoughnutChart";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

function Statistics() {
  const {user} = useKindeBrowserClient();
  
  const [barChartData,setBarChartData] = useState({});
  const [pieChartData,setPieChartData] = useState({});

  useEffect(()=>{
    const formData = new FormData();
    formData.append("user_id","1001");

    // API CALL
    fetch("https://73cd-103-97-166-170.ngrok-free.app/statistics", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setBarChartData(result.data.bar_chart_data);
        setPieChartData(result.data.pie_chart_data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[])

  return (
    <div className="w-full min-h-screen">
      <div className="text-4xl font-bold text-center text-blue-500 my-8">Statistics</div>
      <div className="flex justify-evenly items-start">
        <DoughnutChart pieData={pieChartData}/>
        <BarChart barData={barChartData}/>
      </div>
    </div>
    
  )
}

export default Statistics
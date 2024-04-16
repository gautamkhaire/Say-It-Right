"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect } from "react";
const ProgressBar = ({ percent, color,title }: any) => {
  const circumference = 50 * 2 * Math.PI;
  return (
    <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
      <svg
        className="w-32 h-32 transform translate-x-1 translate-y-1"
        aria-hidden="true"
      >
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className={`text-${color}`}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
      <span className="absolute text-2xl text-blue-700">{title==="Speed" ? `${percent} wpm`:`${percent}%` }</span>
    </div>
  );
};

const StatCard = ({ title, percent, additional, color }: any) => (
  <div className="flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl w-[350px]">
    <ProgressBar percent={percent} color={color} title={title}/>
    <p className="ml-10 font-semibold text-gray-600 sm:text-xl text-center">{title}</p>
    <span
      className={`ml-auto text-xl font-medium text-${color} hidden sm:block`}
    >
      {additional}
    </span>
  </div>
);

function Dashboard() {
  const { user } = useKindeBrowserClient();
  const [tableData, setTableData] = useState([]);
  const [statisticsData,setStatisticsData] = useState({
    "avg_fluency_score": 24,
    "avg_intonation_score": 66,
    "avg_pronounciation_score": 31,
    "avg_speed":75
  });
  useEffect(() => {
    const formData = new FormData();
    formData.append("user_id", "kp_ea4a307e22b54cdd8f06a3b4f514d334");
    fetch("https://8e2f-116-75-11-103.ngrok-free.app/dashboard", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setTableData(result.data.table_data);
        setStatisticsData(result.data.stats);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDownload=async (file_id:any,file_name:any)=>{
    
    const formData = new FormData();
    formData.append("file_id", file_id);
    
    fetch("https://8e2f-116-75-11-103.ngrok-free.app/download",{
      method:"POST",
      body: formData
    }).then((response) => 
      {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        let alink = document.createElement("a");
              alink.href = url;
              alink.download = "SamplePDF.pdf";
              alink.click();
      })
      .catch(error => {
        console.error('Error fetching PDF:', error);
      });
  }

  return (
    <div className="bg-gray-100 min-h-screen w-full p-14">
      <div className="flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-20 mb-20">
        <ProgressBar percent={statisticsData.avg_pronounciation_score} color={"blue-600"} />
        <div>
          <p className="ml-10 text-4xl font-extrabold mb-1">
            Average Pronounication Score
          </p>
          <p className="ml-11 text-xl font-bold text-gray-600">
            Advancing towards phonic excellence...
          </p>
        </div>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-blue-600 mb-10">
          Your Average Score Breakdown
        </p>

        <div className="flex flex-row flex-wrap w-full justify-center gap-8 gap-y-14">
          {/* <StatCard title="Pronounication" percent={statisticsData.avg_pronounciation_score} color="blue-500" /> */}
          <StatCard title="Intonation" percent={statisticsData.avg_intonation_score} color="blue-500" />
          <StatCard title="Fluency" percent={statisticsData.avg_fluency_score} color="blue-500" />
          <StatCard title="Speed" percent={statisticsData.avg_speed} color="blue-500" />
        </div>
      </div>

      <div className="min-h-screen">
        {/* <HistoryTable user_id={user?.id}/> */}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-12">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Filename
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Creation Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Creation Time
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {tableData.map((item, index) => (
                <tr className="odd:bg-gray-50 text-center" key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    {item.file_name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.created_date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.created_time}
                  </td>
                  <button className="bg-blue-400 rounded-2xl pt-1 pb-1 pl-2 pr-2 mt-[4px] text-white" onClick={()=>handleDownload(item.file_id,item.file_name)}>Download Report</button>
                </tr>
              ))}
              {/* <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

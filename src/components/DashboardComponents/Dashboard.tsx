// import { useState } from "react";
import HistoryTable from "../../app/(routes)/history/page";

const ProgressBar = ({ percent, color }: any) => {
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
      <span className="absolute text-2xl text-blue-700">{`${percent}%`}</span>
    </div>
  );
};

const StatCard = ({ title, percent, additional, color }: any) => (
  <div className="flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl">
    <ProgressBar percent={percent} color={color} />
    <p className="ml-10 font-semibold text-gray-600 sm:text-xl">{title}</p>
    <span
      className={`ml-auto text-xl font-medium text-${color} hidden sm:block`}
    >
      {additional}
    </span>
  </div>
);

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-14">
      <div className="flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-20 mb-20">
        <ProgressBar percent={65} color={"blue-600"} />
        <div>
          <p className="ml-10 text-4xl font-extrabold mb-1">
            Overall Speaking Score
          </p>
          <p className="ml-11 text-xl font-bold text-gray-600">
            Your speaking score is{" "}
            <span className="text-green-500 font-bold">Advance</span>. You're
            moving up in the world!
          </p>
        </div>
      </div>

      <div> 
        <p className="text-3xl font-extrabold text-blue-600 mb-10">Your Score Breakdown</p>

        <div className="flex flex-row flex-wrap w-full justify-center gap-8 gap-y-14">
        <StatCard
        title="Pronounication"
        percent={55}
        color="blue-500"
      />
        <StatCard
        title="Intonation"
        percent={60}
        color="blue-500"
      />
        <StatCard
        title="Fluency"
        percent={80}
        color="blue-500"
      />
        <StatCard
        title="Grammar"
        percent={42}
        color="blue-500"
      />
        </div>
      </div>
        
      <div className="min-h-screen">
        <HistoryTable/>
      </div>
      
    </div>
  );
}

export default Dashboard;

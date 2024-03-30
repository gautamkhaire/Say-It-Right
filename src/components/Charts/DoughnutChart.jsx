"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart({pieData}) {
  const status = pieData.pie_keys;
  const count = pieData.pie_values;

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: status,
          datasets: [
            {
              label: "Count",
              data: count,
              backgroundColor: [
                "rgb(75, 192, 192, 0.5)",
                "rgb(255, 159, 64, 0.5)",
                "rgb(255, 205, 86, 0.5)",
                "rgb(0, 102, 255,0.5)",
                "rgb(153, 102, 255, 0.5)",
                // "rgb(255, 99, 132, 0.5)",
              ],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(0,102,255)",
                "rgb(153,102,255)"
                // "rgb(255, 99, 132)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [pieData]);
  return (
    <div className="mt-12">
      <canvas ref={chartRef} width={400} height={400}/>
      <p className="text-gray-800 text-2xl text-center mt-4">Distribution of lesson types</p>
    </div>
  );
}
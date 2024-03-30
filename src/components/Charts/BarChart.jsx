"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import Link from "next/link";
import { Button } from "../ui/button";

export default function BarChart({barData}) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = barData.bar_keys;
      const data = barData.bar_values;

      let delayed;

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              label: "Average Score",
              data: data,
              backgroundColor: [
                "rgb(0, 102, 255,0.5)",
                "rgb(255, 204, 0,0.5)",
                "rgb(255, 159, 64, 0.5)",
              ],
              borderRadius: 10,
            },
          ],
        },
        options: {
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Profile Scores",
            },
          },
          layout: {
            padding: 40,
          },
          // responsive: true
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [barData]);

  function handleDownload() {
    if (chartRef.current) {
      const file = chartRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = file;
      link.download = "barChart.png";
      link.click();
    }
  }
  return (
    <div>
      <canvas ref={chartRef} width={600} height={550} />
      <div className="flex flex-row justify-evenly items-center space-x-4 -mt-10 mb-2">
        <Button className=" bg-blue-500 rounded-full text-white hover:bg-blue-600 hover:text-white">
          <Link href="/customers" target="_blank">
            Details
          </Link>
        </Button>
        <Button
          onClick={handleDownload}
          className=" bg-blue-500 rounded-full text-white hover:bg-blue-600 hover:text-white"
        >
          Download Chart
        </Button>
      </div>
    </div>
  );
}

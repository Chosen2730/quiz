import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SummaryChart = () => {
  const data = {
    labels: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    datasets: [
      {
        label: "My First Dataset",
        data: [14, 12, 15, 34, 32],
        backgroundColor: ["red", "blue", "green", "purple", "pink"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default SummaryChart;

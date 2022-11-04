import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SummaryChart = ({ right, wrong, notAns }) => {
  // console.log(right, wrong, notAns);
  const data = {
    labels: ["Correct Answers", "Wrong Answers", "Unanswered"],
    datasets: [
      {
        label: "My First Dataset",
        data: [right, wrong, notAns],
        backgroundColor: ["#1D1CE5", "#E0144C", "#FD841F"],
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

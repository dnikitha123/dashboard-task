import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
    },
  };

  return (
    <div className="chart-container border pb-3" style={{ height: 300}}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

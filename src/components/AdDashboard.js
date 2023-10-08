import React from "react";
import AdsInsights from "./AdsInsights";
import DoughnutChart from "./DoughnutChart";

const AdDashboard = () => {
  const tableData = [
    {
      id: 1,
      campaigns: "Cosmetics",
      clicks: 300,
      cost: "USD 2,568",
      conversions: 8,
      revenue: "USD 16,568",
    },
    {
      id: 2,
      campaigns: "Serums",
      clicks: 200,
      cost: "USD 168",
      conversions: 115,
      revenue: "USD 362,568",
    },
    {
      id: 3,
      campaigns: "Facewash",
      clicks: 400,
      cost: "USD 568",
      conversions: 123,
      revenue: "USD 266,568",
    },
    {
      id: 4,
      campaigns: "Shampoos",
      clicks: 600,
      cost: "USD 1,568",
      conversions: 5,
      revenue: "USD 16,568",
    },
    {
      id: 5,
      campaigns: "Conditioners",
      clicks: 1600,
      cost: "USD 3,568",
      conversions: 49,
      revenue: "USD 167,568",
    },
  ];

  const chartData = {
    labels: ["40% Male", "35% Female", "25% Unknown"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} className="p-3">
          <AdsInsights tableData={tableData} />
        </div>
        <div style={{ flex: 1 }} className="p-3">
          <DoughnutChart data={chartData} />
        </div>
      </div>
    </>
  );
};

export default AdDashboard;

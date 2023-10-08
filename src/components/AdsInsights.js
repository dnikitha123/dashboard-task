import React from "react";

const AdsInsights = ({ tableData }) => {
  return (
    <div className="border">
      <h5 className="p-2 ">Ads Insights</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Campaigns</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Conversions</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.campaigns}</td>
              <td>{row.clicks}</td>
              <td>{row.cost}</td>
              <td>{row.conversions}</td>
              <td>{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdsInsights;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Chart from 'chart.js/auto'; 
import 'chartjs-plugin-datalabels';
import AdDashboard from "./components/AdDashboard";
import AdsInsights from "./components/AdsInsights";
import SuccessPopup from "./components/SuccessPopup";
import { CreateAd } from "./components/FillData";
import { FillData } from "./components/FillData";

function App() {
  const [showChart, setShowChart] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("");
  const [adType, setAdType] = useState({ textAd: false, mediaAd: false });


  const handleChartToggle = () => {
    setShowChart(!showChart);
  };

  const handleMetricSelect = (metric) => {
    setSelectedMetric(metric);
  };

  const handleAdTypeChange = (type) => {
    setAdType({ ...adType, [type]: !adType[type] });
  };

  useEffect(() => {
    Chart.register('datalabels'); 
  }, []);

  return (
    <Router>
 <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto"> 
      <Nav.Link as={Link} to="/">
        DASHBOARD
      </Nav.Link>
      <Nav.Link as={Link} to="/create-ad">
        CREATE ADS
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <AdDashboard />
          }
        />
        <Route
          path="/create-ad"
          element={
            <CreateAd adType={adType} handleAdTypeChange={handleAdTypeChange} />
          }
        />
        <Route
          path="/ads-insights"
          element={
            <AdsInsights
              showChart={showChart}
              handleChartToggle={handleChartToggle}
              selectedMetric={selectedMetric}
              handleMetricSelect={handleMetricSelect}
            />
          }
        />
        <Route path="/fill-data" element={<FillData />} />
        <Route path="/ads-submitted" element={<SuccessPopup />} />
      </Routes>
    </Router>
  );
}

export default App;

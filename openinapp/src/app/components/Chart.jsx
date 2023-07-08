import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./../../styles/chart.css";
import BottomArrow from "./../../../public/BottomArrow.png";
import Image from "next/image";

const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    }
  };

  return (
    <div id="mainGraphContainer">
      <div id="graphContainer">
        <div id="bottomCardHeading">
          <div id="bottomCardHeadingLeft">
            <h3>Activities</h3>
          </div>
          <div id="bottomCardHeadingRight">
            <p>May - June 2021</p>
            <Image src={BottomArrow} width={8} height={5} alt="Arrow" />
          </div>
        </div>
        <Line
          datasetIdKey="id"
          data={{
            labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
            datasets: [
              {
                id: 1,
                label: "User",
                data: [100, 420, 140, 450, 180, 250],
                borderColor: "#9BDD7C",
                tension: 0.4,
              },
              {
                id: 2,
                label: "Guest",
                data: [200, 380, 205, 300, 220, 440],
                borderColor: "#E9A0A0",
                tension: 0.4,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default BarChart;

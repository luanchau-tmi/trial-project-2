import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const CompanyPerformance = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState('2022');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2023', '2024'];

  const totalValues = {
    doughnut1: 300, // Update with your actual total value for the first Doughnut
    doughnut2: 200, // Update with your actual total value for the second Doughnut
  };

  const calculatePercentage = (value, total) => Math.round((value / total) * 100);

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);

  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const halfDoughnutOptions = {
    cutout: '60%',
    circumference: 180,
    responsive: true,
    rotation: 270,
  };

  const doughnutContainerStyle = {
    width: '12rem', // Set the desired width for the background rectangle
    height: '8rem', // Set the desired height for the background rectangle
  };

  const doughnutBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%', // Use 100% width to fill the container
    height: '100%', // Use 100% height to fill the container
    padding: '0', // Adjust the padding as needed
    margin: '0', // Adjust the margin as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Adjust the background color and transparency as needed
  };

  const doughnutStyle = {
    padding: '10% 0 0 0', // Adjust the padding for the Doughnut as needed (top, right, bottom, left)
    width: '100%', // Use 100% width to fill the container
  };

  const createDoughnutData = (totalValue) => ({
    data: {
      labels: [''],
      datasets: [
        {
          data: [totalValue],
          backgroundColor: ['#FF6384'],
          hoverBackgroundColor: ['#FF6384'],
        },
      ],
    },
    options: {
      ...halfDoughnutOptions,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const table1Data = [
    { col1: 'Item 1', col2: '10%', col3: '20%', col4: '15%', col5: '25%', col6: '5%', col7: '5%' },
    // Add more rows as needed
  ];

  const table2Data = [
    { col1: 'Small', col2: '20%', col3: '30%', col4: '25%', col5: '25%' },
    // Add more rows as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Company Performance</h2>
  
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center">
          Month:
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="ml-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
  
        <label className="flex items-center">
          Year:
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="ml-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
  
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-40 mb-2 relative" style={doughnutContainerStyle}>
            <div style={doughnutBackground}>
              {/* Left top text */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-start text-base ml-2 mt-2">
                    111
                  </div>                 
              {/* Right top text */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-end text-base mr-2 mt-2">
                    222
                  </div>
              <div style={doughnutStyle}>
                <Doughnut data={createDoughnutData(totalValues.doughnut1).data} options={createDoughnutData(totalValues.doughnut1).options} />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-base mt-12">
              {calculatePercentage(totalValues.doughnut1, totalValues.doughnut1)}%
            </div>
          </div>
  
          <div className="w-40 mb-2 relative" style={doughnutContainerStyle}>
            <div style={doughnutBackground}>
              {/* Left top text */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-start text-base ml-2 mt-2">
                    111
                  </div>                 
              {/* Right top text */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-end text-base mr-2 mt-2">
                    222
                  </div>
              <div style={doughnutStyle}>
                <Doughnut data={createDoughnutData(totalValues.doughnut2).data} options={createDoughnutData(totalValues.doughnut2).options} />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-base mt-12">
              {calculatePercentage(totalValues.doughnut2, totalValues.doughnut2)}%
            </div>
          </div>
        </div>
  
        <div className="flex flex-col">
          <div>
            <h3 className="text-xl font-semibold mb-2">Table 1</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300">Column 1</th>
                  <th className="border border-gray-300">Column 2</th>
                  <th className="border border-gray-300">Column 3</th>
                  <th className="border border-gray-300">Column 4</th>
                  <th className="border border-gray-300">Column 5</th>
                  <th className="border border-gray-300">Column 6</th>
                  <th className="border border-gray-300">Column 7</th>
                </tr>
              </thead>
              <tbody>
                {table1Data.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300">{row.col1}</td>
                    <td className="border border-gray-300">{row.col2}</td>
                    <td className="border border-gray-300">{row.col3}</td>
                    <td className="border border-gray-300">{row.col4}</td>
                    <td className="border border-gray-300">{row.col5}</td>
                    <td className="border border-gray-300">{row.col6}</td>
                    <td className="border border-gray-300">{row.col7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">Table 2</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300" style={{ width: '20%' }}>Column 1</th>
                  <th className="border border-gray-300">Column 2</th>
                  <th className="border border-gray-300">Column 3</th>
                  <th className="border border-gray-300">Column 4</th>
                  <th className="border border-gray-300">Column 5</th>
                </tr>
              </thead>
              <tbody>
                {table2Data.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300" style={{ width: '20%' }}>{row.col1}</td>
                    <td className="border border-gray-300">{row.col2}</td>
                    <td className="border border-gray-300">{row.col3}</td>
                    <td className="border border-gray-300">{row.col4}</td>
                    <td className="border border-gray-300">{row.col5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPerformance;

import React from "react";

function Map() {
  return (
    <>
      <h5 className="text-2xl font-normal uppercase font-sans">World map</h5>
      <div className="flex w-full">
        <div className="w-3/6">
          <img src="./World-Map.svg" alt="" />
        </div>
        <div className="w-3/6">
          <table className="table w-full text-left">
            <thead>
              <tr>
                <th className="text-xl font-sans font-normal">Country</th>
                <th>Visitors</th>
                <th>% Users</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-solid border relative rounded">
                <td className="py-2 pr-2 pl-7">
                  <span className="w-3 h-3 rounded-full bg-purple-600 absolute top-3 left-2"></span>
                  United States
                </td>
                <td>2,345,300</td>
                <td>30%</td>
              </tr>
              <tr className="border-solid border relative">
                <td className="py-2 pr-2 pl-7">
                  <span className="w-3 h-3 rounded-full bg-green-600 absolute top-3 left-2"></span>
                  India
                </td>
                <td>1,545,567</td>
                <td>30%</td>
              </tr>
              <tr className="border-solid border relative">
                <td className="py-2 pr-2 pl-7">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 absolute top-3 left-2"></span>
                  Russia
                </td>
                <td>345,300</td>
                <td>30%</td>
              </tr>
              <tr className="border-solid border relative">
                <td className="py-2 pr-2 pl-7">
                  <span className="w-3 h-3 rounded-full bg-red-600 absolute top-3 left-2"></span>
                  Australia
                </td>
                <td>2,345,300</td>
                <td>30%</td>
              </tr>
              <tr className="border-solid border relative">
                <td className="py-2 pr-2 pl-7">
                  <span className="w-3 h-3 rounded-full bg-blue-600 absolute top-3 left-2"></span>
                  Germany
                </td>
                <td>2,345,300</td>
                <td>30%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Map;

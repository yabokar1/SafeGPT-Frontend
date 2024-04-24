"use client";

import React, { useEffect, useState } from "react";
import { dataEntities } from "../api.js";

export default function Dataset() {
  const [file, setFile] = useState();
  const [csv, setCsv] = useState([]);

  // const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    return array;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();
    let csvArray;

    if (file) {
      fileReader.onload = async function (event) {
        const text = event.target.result;
        // csvArray = await csvFileToArray(text);
        // setCsv(csvArray);

        try {
          csvArray = csvFileToArray(text);
          setCsv(csvArray);
          console.log("Start...");
          const response = await dataEntities(csvArray);
          console.log(response);
          setCsv(csvArray);
        } catch (err) {
          console.log(err.message);
        }
      };
    }

    fileReader.readAsText(file);
    console.log(file);
    console.log(csv);
  };

  const headerKeys = Object.keys(Object.assign({}, ...csv));
  // console.log(headerKeys);

  return (
    <div className="my-8 mx-auto">
      <div className="flex flex-row p-2 w-fit h-fit justify-center bg-slate-50 rounded-md">
        <div style={{ textAlign: "center" }}>
          {/* <h1>CSV IMPORT PII Entities</h1> */}
          <form>
            <input
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleOnChange}
            />

            <button
              className="bg-blue-500 text-white rounded-md w-40"
              onClick={(e) => {
                handleOnSubmit(e);
              }}
            >
              Generate Dataset
            </button>
          </form>
        </div>
      </div>

      {headerKeys.length > 0 && (
        <div className="flex flex-row p-2 w-fit h-fit justify-center my-8 mt-44 mx-auto bg-slate-50 rounded-md">
          <table className="font-sans border-collapse w-full">
            <thead>
              <tr>
                {headerKeys.map((key) => (
                  <th
                    key={key}
                    className="border border-gray-300 px-4 py-2 text-left"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {csv.map((item) => (
                <tr key={item}>
                  {Object.values(item).map((val) => (
                    <td
                      key={val}
                      className="border border-gray-300 px-4 py-2 text-left"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

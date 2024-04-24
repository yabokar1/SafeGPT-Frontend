"use client";

import { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// import { Input, Button } from "@nextui-org/react";

export default function DataSet() {
  const [userInput, setUserInput] = useState([{ label: "", input: "" }]);
  console.log(userInput);

  const handleAddInput = (event) => {
    event.preventDefault();
    setUserInput((inputList) => [...inputList, { label: "", input: "" }]);
  };

  const handleInputChange = (index, fieldName, value) => {
    setUserInput((inputList) => {
      const updatedInputList = [...inputList];
      updatedInputList[index][fieldName] = value;
      return updatedInputList;
    });
  };

  const handleRemoveInput = (index) => {
    setUserInput((inputList) => {
      const updatedInputList = [...inputList];
      updatedInputList.splice(index, 1);
      return updatedInputList;
    });
  };
  return (
    <div className="relative w-3/4 my-8 mx-auto bg-slate-50 rounded-md">
      <form>
        <div className="absolute bottom-0 left-[35%]">
          <div className="flex flex-row space-x-1 ">
            <button
              onClick={handleAddInput}
              className="bg-blue-500 text-white rounded-md w-40"
            >
              Add New PII
            </button>
            <button
              onClick={handleAddInput}
              className="bg-blue-500 text-white rounded-md w-40"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="grid-rows-4 grid  content-center gap-4">
          {userInput.map(({ label, input }, index) => (
            <div
              key={index}
              className="flex flex-col w-fit h-20 pb-2 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md"
            >
              <h1>PII Entity</h1>
              <div className="flex flex-row">
                <input
                  className="w-50 h-50 m-1.5"
                  type="text"
                  value={label}
                  onChange={(e) =>
                    handleInputChange(index, "label", e.target.value)
                  }
                />
                <input
                  className="w-50 h-50 m-1.5"
                  type="text"
                  value={input}
                  onChange={(e) =>
                    handleInputChange(index, "input", e.target.value)
                  }
                />
                <IoIosRemoveCircleOutline onClick={handleRemoveInput} />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

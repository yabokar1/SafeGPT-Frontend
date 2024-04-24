"use client";

import { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const hyperparameters = {
  "Lora Alpha": "",
  "Training Instance": "",
  "Lora R": "",
  "Learning Rate": "",
  "Enter training dataset": "",
  "Lora Dropout": "",
  Epochs: "",
};
export default function TrainModel() {
  const [parameters, setParameters] = useState({});

  const handleInputChange = (key, value) => {
    setParameters((inputList) => ({
      ...parameters,
      [key]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(parameters);
  };

  return (
    <div className="relative w-3/4 my-8 mx-auto bg-slate-50 rounded-md">
      <h1 className="text-center text-3xl">Train Model </h1>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-60">
          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Lora Alpha
              </label>
              <input
                className="m-1.5 ml-12"
                type="text"
                onChange={(e) =>
                  handleInputChange("Lora Alpha", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Training Instance
              </label>
              <input
                className="mt-1.5 mr-1.5 mb-1.5 ml-20"
                type="text"
                onChange={(e) =>
                  handleInputChange("Training Instance", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Lora R
              </label>
              <input
                className="m-1.5 ml-20"
                type="text"
                onChange={(e) => handleInputChange("Lora R", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5 mr-2.5" type="text">
                Learning Rate
              </label>
              <input
                className="m-1.5 ml-24"
                type="text"
                onChange={(e) =>
                  handleInputChange("Learning Rate", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Epochs
              </label>
              <input
                className="m-1.5 ml-20"
                type="text"
                onChange={(e) => handleInputChange("Epochs", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 pr-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className=" m-1.5" type="text">
                Enter training dataset
              </label>
              <input
                className="m-1.5 ml-11"
                type="text"
                onChange={(e) => handleInputChange("Dataset", e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Lora Dropout
              </label>
              <input
                className="m-1.5 ml-10"
                type="text"
                onChange={(e) =>
                  handleInputChange("Lora Dropout", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-[40%]">
          <div className="flex flex-row space-x-1 ">
            <button className="bg-blue-500 text-white rounded-md w-40">
              Edit
            </button>
            <button className="bg-blue-500 text-white rounded-md w-40">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

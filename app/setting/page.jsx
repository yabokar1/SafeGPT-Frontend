"use client";

import { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// import { Input, Button } from "@nextui-org/react";

export default function Setting() {
  return (
    <div className="relative w-3/4 my-8 mx-auto bg-slate-50 rounded-md">
      <h1 className="text-center text-3xl">User Setting</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-60">
          <div className="flex flex-col w-fit pb-1 pt-1 pr-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className=" m-1.5" type="text">
                Access key ID
              </label>
              <input className="m-1.5 ml-11" type="text" />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Username
              </label>
              <input className="m-1.5 ml-20" type="text" />
            </div>
          </div>
          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                S3 bucket name
              </label>
              <input className="m-1.5 ml-7 pr-2" type="text" />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Name
              </label>
              <input className="m-1.5 ml-28" type="text" />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Secret access key
              </label>
              <input className="m-1.5 ml-4" type="text" />
            </div>
          </div>

          <div className="flex flex-col w-fit pb-1 pt-1 m-8 items-center flex-row space-x-1 bg-blue-300 rounded-md">
            <div className="flex flex-row">
              <label className="m-1.5" type="text">
                Password
              </label>
              <input className="mt-1.5 mr-1.5 mb-1.5 ml-20" type="text" />
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

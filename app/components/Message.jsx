import React from "react";

export default function Message({ messages }) {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
      {messages.map((message, index) => (
        <div key={index}>
          <div className="flex items-start">
            <img
              className="mr-2 h-8 w-8 rounded-full"
              src="https://dummyimage.com/128x128/363536/ffffff&text=J"
            />
            <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
              <p>{message.input}</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start">
            <img
              className="ml-2 h-8 w-8 rounded-full"
              src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
            />
            <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
              <p>{message.response}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row-reverse items-start">
        <div className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row"></div>
      </div>
    </div>
  );
}

import React from "react";
import Header from "../components/Header";

const TimerPage = () => {
  return (
    <div className="">
      <Header title="Fight" />
      <div className="mx-8">
        <div className="flex flex-col items-center justify-center">
          <h1>timer title</h1>
          <div className="flex">
            <p>00</p>
            <p>m</p>
            <p>:</p>
            <p>00</p>
            <p>s</p>
          </div>
        </div>
        <button className="w-full h-10 bg-sky-200 rounded">PAUSE</button>
        <button className="w-full h-10 bg-rose-200 rounded">STOP</button>
      </div>
    </div>
  );
};

export default TimerPage;

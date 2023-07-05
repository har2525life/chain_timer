import React from "react";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";

function createCalender(): JSX.Element[] {
  const doms = [];
  for (let i = 1; i < 32; i++) {
    const dom = (
      <div className="h-10">
        <span className="text-center bg-sky-200">{i}</span>
      </div>
    )
    doms.push(dom);
  }
  return doms;
}

export default function LogPage() {
  return (
    <div className="">
      <Header title="Log" />
      <div className="mx-8 grid grid-cols-7 grid-rows-1">
        <span className="text-center bg-sky-200">日</span>
        <span className="text-center bg-sky-200">月</span>
        <span className="text-center bg-sky-200">火</span>
        <span className="text-center bg-sky-200">水</span>
        <span className="text-center bg-sky-200">木</span>
        <span className="text-center bg-sky-200">金</span>
        <span className="text-center bg-sky-200">土</span>
      </div>
      <div className="mx-8 grid grid-cols-7 grid-rows-6">
        {createCalender().map((day) => day)}
      </div>
      <CreateButton page="" />
    </div>
  );
}

import React from "react";
import Header from "../components/Header";
import { useHistory, useLocation } from "react-router";
import CreateButton from "../components/CreateButton";

export default function CreateTimerPage() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className="mx-10">
        <input
          type="text"
          placeholder="タイマーの名前"
          className="w-full border-b px-2 h-20 text-xl"
        />
        <div className="mt-14">
          <div className="border w-hull h-16 border-l-2 border-indigo-600 flex justify-between items-center px-2">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-sky-200"></div>
              <h1 className="text-xl ml-3">インターバルタイマー</h1>
            </div>
            <p>00m00s</p>
          </div>
          <div className="border w-hull h-16 border-l-2 border-indigo-600 flex justify-between items-center px-2 mt-5">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-sky-200"></div>
              <h1 className="text-xl ml-3">インターバルタイマー</h1>
            </div>
            <p>00m00s</p>
          </div>
        </div>
        <CreateButton page={pathname} />
      </div>
      {/* <CreateTimer /> */}
    </>
  );
}

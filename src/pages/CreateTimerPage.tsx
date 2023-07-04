import React from "react";
import Header from "../components/Header";
import { useHistory, useLocation } from "react-router";
import CreateButton from "../components/CreateButton";

export default function CreateTimerPage() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <>
      <Header title="Create Timer" />
      <div className="mx-8 mt-4">
        <label htmlFor="timerName">タイマーの名前</label>
        <input
          id="timerName"
          type="text"
          placeholder="morning routing"
          className="w-full border px-2 h-16 text-xl"
        />
        <div className="mt-8">
          <div className="border w-hull h-16 border-l-4 border-sky-600 flex justify-between items-center px-2">
            <div className="flex">
              <div className="w-6 h-6 rounded-full border-2 border-sky-200"></div>
              <h1 className="text-xl ml-3">インターバルタイマー</h1>
            </div>
            <p>00m00s</p>
          </div>
          <div className="border w-hull h-16 border-l-4 border-sky-600 flex justify-between items-center px-2 mt-4">
            <div className="flex">
              <div className="w-6 h-6 rounded-full border-2 border-sky-200"></div>
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

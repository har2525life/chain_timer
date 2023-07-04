import React, { useState } from "react";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import { CaretForwardCircleOutline } from "react-ionicons";

export default function MainPage() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Header />
      {display ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="">表示するタイマーがありません</p>
          <p className="">早速タイマーを作成しましょう</p>
        </div>
      ) : (
        <div className="border-b">
          <div className="flex flex-col justify-center h-20">
            <div className="flex justify-between line p-10">
              <p className="text-2xl">歯磨き</p>
              <button className="h-10 w-10 bg-rose-200 rounded-full flex flex-col justify-center items-center text-xl">
                <CaretForwardCircleOutline
                  color={"#00000"}
                  height="250px"
                  width="250px"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      <CreateButton />
    </>
  );
}

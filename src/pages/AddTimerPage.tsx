import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router";
import CreateButton from "../components/CreateButton";

const AddTimerPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className="mx-8">
        <div className="flex flex-col mt-5">
          <label htmlFor="timer-select">タイマーの種類</label>
          <select name="timer" id="timer-select" className="border h-16 mt-2">
            <option value="countDown">カウントダウンタイマー</option>
            <option value="interval">インターバルタイマー</option>
            <option value="countUp">カウントアップタイマー</option>
          </select>
        </div>
        <ul>
          <li>
            <p className="mt-5">作業の名前</p>
            <input
              type="text"
              placeholder="プログラミングの勉強"
              className="h-16 px-2 border w-full mt-2"
            />
          </li>
          <li>
            <p className="mt-5">作業時間</p>
            <input type="time" className="h-16 px-2 border w-full mt-2" />
          </li>
          <li>
            <p className="mt-5">休憩時間</p>
            <input type="time" className="h-16 px-2 border w-full mt-2" />
          </li>
          <li>
            <p className="mt-5">時間アナウンス</p>
            <input type="time" className="h-16 px-2 border w-full mt-2" />
          </li>
        </ul>
      </div>
      <CreateButton page={pathname} />
    </>
  );
};

export default AddTimerPage;

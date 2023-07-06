import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router";
import CreateButton from "../components/CreateButton";
import { IonContent, IonPage } from "@ionic/react";

const timerType = [
  { name: "カウントダウンタイマー", value: "countDown" },
  { name: "インターバルタイマー", value: "interval" },
  { name: "カウントアップタイマー", value: "countUp" },
];

function createDisplayTimer(): number[] {
  const month = [];
  for (let i = 0; i < 61; i++) {
    month.push(Number(i));
  }
  return month;
}

const AddTimerPage = () => {
  const { pathname } = useLocation();
  const changeWorkingTimer = () => {
    console.log("test");
  };
  return (
    <IonPage>
      <IonContent>
        <Header title="Add Timer" />
        <div className="mx-8">
          <div className="flex flex-col mt-5">
            <label htmlFor="timer-select">タイマーの種類</label>
            <select
              name="timer"
              id="timer-select"
              className="border h-14 mt-2 px-2"
            >
              {timerType.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <ul>
            <li>
              <p className="mt-5">作業の名前</p>
              <input
                type="text"
                placeholder="プログラミングの勉強"
                className="h-14 px-2 border w-full mt-2"
              />
            </li>
            <li className="mt-3">
              <label className="mt-5">作業時間</label>
              <input
                onClick={changeWorkingTimer}
                type="text"
                value={`00分 00秒`}
                className="h-14 px-2 border w-full mt-2"
              />
            </li>
            {/* <li>
              <p className="mt-5">休憩時間</p>
              <input type="time" className="h-14 px-2 border w-full mt-2" />
            </li> */}
            {/* <li>
            <p className="mt-5">残り時間アナウンス</p>
            <input type="time" className="h-14 px-2 border w-full mt-2" />
          </li> */}
          </ul>
        </div>
        <CreateButton page={pathname} />
      </IonContent>
    </IonPage>
  );
};

export default AddTimerPage;

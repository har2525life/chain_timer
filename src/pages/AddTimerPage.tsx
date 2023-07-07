import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useHistory, useLocation } from "react-router";
import CreateButton from "../components/CreateButton";
import { IonContent, IonPage } from "@ionic/react";
import { useForm } from "react-hook-form";

type LocationState = {
  name: string;
  id: string;
  timers?: {
    type: "up" | "down" | "interval";
    name: string;
    time: number;
    restTime: number;
  }[];
};
type CreateTimerState = {
  name: string;
  timer?: number;
  restTime?: number;
};

const timerTypes = [
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

export default function AddTimerPage() {
  // package
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, reset } = useForm<CreateTimerState>();

  const { pathname, state } = location as {
    pathname: string;
    state: LocationState;
  };
  const changeWorkingTimer = () => {
    // console.log("test");
  };
  // console.log(state);

  const [timerName, setTimerName] = useState("");
  const [timerType, setTimerType] = useState("countDown");

  const registerTimer = (event: CreateTimerState) => {
    const getItem = localStorage.getItem("routing");
    if (getItem === null) return;
    const getItemParse = JSON.parse(getItem);

    const keepHabit = getItemParse.map((habit: any) => {
      let data;
      if (habit.id === state.id && habit.timers) {
        const test = habit.timers;
        data = {
          ...habit,
          timers: [
            ...test,
            {
              name: timerName,
              kind: timerType,
              workTimer: event.timer,
              restTime: event.restTime,
            },
          ],
        };
      } else if (habit.id === state.id) {
        data = {
          ...habit,
          timers: [
            {
              name: timerName,
              kind: timerType,
              workTimer: event.timer,
              restTime: event.restTime,
            },
          ],
        };
      }

      return data;
    });
    // console.log(keepHabit);
    const routingStringify = JSON.stringify(keepHabit);
    // console.log(routingStringify)
    localStorage.setItem("routing", routingStringify);
    history.push({
      pathname: `/habit`,
      state: { name: state.name, id: state.id },
    });
  };

  useEffect(() => {
    if (pathname === "/add") {
      setTimerName(state ? state.name : "");
      reset({ name: state.name });
    }
  }, [pathname]);

  return (
    <IonPage>
      <IonContent>
        <header>
          <div className="flex justify-between items-center h-14 bg-sky-400 border-gray-200 px-4">
            <h1 className=" text-black text-2xl font-bold ">Add Timer</h1>
            <button onClick={handleSubmit(registerTimer)}>保存</button>
          </div>
        </header>
        <div className="mx-8">
          <div className="flex flex-col mt-5">
            <label htmlFor="timer-select">タイマーの種類</label>
            <select
              name="timer"
              id="timer-select"
              className="border h-14 mt-2 px-2"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setTimerType(e.target.value)
              }
            >
              {timerTypes.map((type) => (
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
                {...register("name", { required: true })}
                type="text"
                placeholder="プログラミングの勉強"
                className="h-14 px-2 border w-full mt-2"
                value={timerName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTimerName(e.target.value)
                }
              />
            </li>
            {timerType === "countDown" && (
              <div className="mt-3">
                <label htmlFor="">作業時間</label>
                <input
                  {...register("timer", { required: timerType === "countDown" ? true: false })}
                  onClick={changeWorkingTimer}
                  type="text"
                  className="h-14 px-2 border w-full mt-2"
                />
              </div>
            )}
            {timerType === "interval" && (
              <div className="mt-3">
                <label htmlFor="">作業時間</label>
                <input
                  {...register("timer", {
                    required: timerType === "interval" ? true : false,
                  })}
                  onClick={changeWorkingTimer}
                  type="number"
                  className="h-14 px-2 border w-full mt-2"
                />
                <li>
                  <p className="mt-5">休憩時間</p>
                  <input
                    {...register("restTime", {
                      required: timerType === "interval" ? true : false,
                    })}
                    type="time"
                    className="h-14 px-2 border w-full mt-2"
                  />
                </li>
              </div>
            )}
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
}

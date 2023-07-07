import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useHistory, useLocation } from "react-router";
import CreateButton from "../components/CreateButton";
import { IonContent, IonPage } from "@ionic/react";
import { nanoid } from "nanoid";

type LocationState = {
  name: string;
  id: string;
};

type CreateHabit = {
  habitName: string;
};

export default function CreateHabitPage() {
  // package
  const history = useHistory();
  const location = useLocation();
  // console.log(location);

  const { pathname, state } = location as {
    pathname: string;
    state: LocationState;
  };
  // console.log(pathname);
  // const transitionPage = () => {
  //   history.push("/add");
  // };

  const [habitName, setHabitName] = useState("");

  const keepHabit = () => {
    if (!habitName) return;

    const getLocalStorage = localStorage.getItem("routing");
    if (getLocalStorage === null) {
      const newHabits = new Array({ name: habitName, id: nanoid() });
      const jsonHabitName = JSON.stringify(newHabits);
      localStorage.setItem("routing", jsonHabitName);
    } else {
      const getHabitParse = JSON.parse(getLocalStorage!);
      if (state.id) {
        // console.log(state.id);
        const { id } = state;
        const editHabit = getHabitParse.map((habit: LocationState) =>
          habit.id === id ? { ...habit, name: habitName } : habit
        );
        const jsonHabitName = JSON.stringify(editHabit);
        localStorage.setItem("routing", jsonHabitName);
      } else {
        const newHabits = [{ name: habitName, id: nanoid() }, ...getHabitParse];
        const jsonHabitName = JSON.stringify(newHabits);
        localStorage.setItem("routing", jsonHabitName);
      }
    }
    history.push("/main");
    setHabitName("");
  };
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    if (pathname === "/habit") {
      setHabitName(state ? state.name : "");
      const getItem = localStorage.getItem("routing");
      if (getItem === null) return;
      const getItemParse = JSON.parse(getItem);
      const getData = getItemParse.filter(
        (item: any) => item.id === state.id
      )[0];
      console.log(getData)

      const dataState = getData ? getData.timers : []
      console.log(dataState)

      setTimers(dataState);
    }
  }, [pathname]);

  const transitionPage = (timerName: string) => {
    // console.log("test");
    history.push({
      pathname: `/add`,
      state: { name: state.name, id: state.id, timerName, },
    });
  };

  return (
    <IonPage>
      <IonContent>
        <header>
          <div className="flex items-center justify-between h-14 bg-sky-400 border-gray-200 px-4">
            <h1 className=" text-black text-2xl font-bold ">Create Habit</h1>
            <button className="" onClick={keepHabit}>
              保存
            </button>
          </div>
        </header>
        <div className="mx-8 mt-4">
          <label htmlFor="timerName">ルーティンの名前</label>
          <input
            // onFocus={changeButtonStyle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHabitName(e.target.value)
            }
            id="timerName"
            type="text"
            placeholder="morning routing"
            className="w-full border px-2 h-16 text-xl"
            value={habitName}
          />
          <div className="mt-8">
            {timers && timers.map((timer:any) => (
              <div
                className="mt-2 border w-hull h-16 border-l-4 border-sky-600 flex justify-between items-center px-2"
                onClick={() => transitionPage(timer.name)}
                role="button"
              >
                <div className="flex">
                  <div className="w-6 h-6 rounded-full border-2 border-sky-200"></div>
                  <h1 className="text-xl ml-3">{timer.name}</h1>
                </div>
                <p>00m00s</p>
              </div>
            ))}
          </div>
          <div onClick={() => transitionPage}>
            <CreateButton />
          </div>
        </div>
        {/* <CreateTimer /> */}
      </IonContent>
    </IonPage>
  );
}

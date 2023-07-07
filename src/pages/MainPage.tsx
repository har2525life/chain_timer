import React, { MouseEventHandler, useEffect, useState } from "react";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import { CaretForwardOutline } from "react-ionicons";
import { useHistory, useLocation } from "react-router";
import { IonPage, IonContent } from "@ionic/react";

type Habit = {
  name: string;
  id: string;
};

type Routin = {
  name: string;
  id: string
}

export default function MainPage() {
  // package
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const [habits, setHabits] = useState<Habit[]>([]);

  const transitionPage = (path: string, routin: Routin) => {
    history.push({ pathname: `/${path}`, state:  routin });
  };

  useEffect(() => {
    // console.log("useEffect");
    const getHabit = localStorage.getItem("routing");
    // console.log(getHabit);
    if (getHabit === null) {
      return;
    }
    // console.log(getHabit);
    const getHabitParse = JSON.parse(getHabit);
    // if (getHabit === null) {
    //   return;
    // } else {
    //   const getHabitParse = JSON.parse(getHabit);
    // console.log(getHabitParse);
    setHabits(getHabitParse);
    // }
  }, [pathname]);

  return (
    <IonPage>
      <IonContent>
        <Header title="Chain Timer" />
        {habits.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="">表示するタイマーがありません</p>
            <p className="">早速タイマーを作成しましょう</p>
          </div>
        ) : (
          <div className="">
            {habits.map((routin) => (
              <div
                key={routin.id}
                className="border-b"
                onClick={() => transitionPage("habit", routin)}
                role="button"
              >
                <div className="flex flex-col justify-center h-20">
                  <div className="flex justify-between line px-8">
                    <p className="text-xl leading-10">{routin.name}</p>
                    <button
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        // transitionPage("timer", routin);
                      }}
                      className="z-10 h-10 w-10 bg-rose-200 rounded-full flex flex-col justify-center items-center text-xl"
                    >
                      <CaretForwardOutline
                        // onClick={() => transitionPage("timer", e)}
                        color={"#fefefe"}
                        height="30px"
                        width="30px"
                        style={{ marginLeft: "3px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <CreateButton page={pathname} />
      </IonContent>
    </IonPage>
  );
}

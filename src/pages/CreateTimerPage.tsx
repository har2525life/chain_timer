import React, { useState } from "react";
import Header from "../components/Header";
import { useHistory, useLocation } from "react-router";
import CreateButton from "../components/CreateButton";
import { IonContent, IonPage } from "@ionic/react";

type LocationState = {
  name: string 
}

export default function CreateTimerPage() {
  const history = useHistory();
  const location = useLocation();
  const { pathname, state = {name: ""} } = location as {pathname: string, state: LocationState};
  const transitionPage = () => {
    history.push("/add");
  };
  const [style, setStyle] = useState("add");

  const changeButtonStyle = () => {
    setStyle("check");
  };
  const [routingName, setRoutingName] = useState(state.name);
  const blurButtonStyle = () => {
    setStyle("add");
    const newRoutingName = new Array(routingName);
    const getLocalStorage = localStorage.getItem('routing')
    const jsonNewRoutingName = JSON.stringify(newRoutingName);
    localStorage.setItem("routing", jsonNewRoutingName);
  };

  return (
    <IonPage>
      <IonContent>
        <Header title="Create Timer" />
        <div className="mx-8 mt-4">
          <label htmlFor="timerName">ルーティンの名前</label>
          <input
            onFocus={changeButtonStyle}
            onBlur={blurButtonStyle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoutingName(e.target.value)
            }
            id="timerName"
            type="text"
            placeholder="morning routing"
            className="w-full border px-2 h-16 text-xl"
            value={routingName}
          />
          <div className="mt-8">
            <div
              className="border w-hull h-16 border-l-4 border-sky-600 flex justify-between items-center px-2"
              onClick={transitionPage}
              role="button"
            >
              <div className="flex">
                <div className="w-6 h-6 rounded-full border-2 border-sky-200"></div>
                <h1 className="text-xl ml-3">インターバルタイマー</h1>
              </div>
              <p>00m00s</p>
            </div>
            <div
              className="border w-hull h-16 border-l-4 border-sky-600 flex justify-between items-center px-2 mt-4"
              onClick={transitionPage}
              role="button"
            >
              <div className="flex">
                <div className="w-6 h-6 rounded-full border-2 border-sky-200"></div>
                <h1 className="text-xl ml-3">インターバルタイマー</h1>
              </div>
              <p>00m00s</p>
            </div>
          </div>
          <CreateButton page={pathname} style={style} />
        </div>
        {/* <CreateTimer /> */}
      </IonContent>
    </IonPage>
  );
}

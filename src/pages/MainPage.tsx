import React, { MouseEventHandler, useEffect, useState } from "react";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import { CaretForwardOutline } from "react-ionicons";
import { useHistory, useLocation } from "react-router";
import { IonPage, IonContent } from "@ionic/react";

export default function MainPage() {
  const [routins, setRoutins] = useState<[]>([]);
  // const [display, setDisplay] = useState(true);
  const history = useHistory();
  const location = useLocation();
  // console.log(location);
  // console.log(history);
  const { pathname } = location;

  const transitionPage = (path: string, name: string) => {
    // console.log(path);
    history.push({ pathname: `/${path}`, state: { name } });
  };

  useEffect(() => {
    // console.log("useEffect");
    const getItem = localStorage.getItem("routing");
    console.log(getItem)
    if (getItem === null) {
      return;
    }
    const parseGetItem = JSON.parse(getItem);
    console.log(parseGetItem)
    // console.log(parseGetItem[0].length);
    if (parseGetItem[0].length === 0) {
      setRoutins([]);
    } else {
      setRoutins(parseGetItem);
    }
  }, [pathname]);

  return (
    <IonPage>
      <IonContent>
        <Header title="Chain Timer" />
        {routins.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="">表示するタイマーがありません</p>
            <p className="">早速タイマーを作成しましょう</p>
          </div>
        ) : (
          <div className="">
            {routins.map((routin) => (
              <div
                key={routin}
                className="border-b"
                onClick={() => transitionPage("register", routin)}
                role="button"
              >
                <div className="flex flex-col justify-center h-20">
                  <div className="flex justify-between line px-8">
                    <p className="text-xl leading-10">{routin}</p>
                    <button
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        transitionPage("timer", routin);
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

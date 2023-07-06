import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { IonContent, IonPage } from "@ionic/react";

const TimerPage = () => {
  const [isStart, setIsStart] = useState(true);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    setIsStart(true);
  };

  useEffect(() => {
    startTimer();
  }, []);
  const stopTimer = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsStart(false);
  };
  return (
    <IonPage className="">
      <IonContent>
        <Header title="Fight" />
        <div className="mx-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl">timer title</h1>
            <div className="flex my-4">
              <p>00</p>
              <p>m</p>
              <p>:</p>
              <p>{count}</p>
              <p>s</p>
            </div>
          </div>
          {isStart ? (
            <button
              onClick={stopTimer}
              className="w-full h-10 bg-rose-200 rounded"
            >
              STOP
            </button>
          ) : (
            <button
              onClick={startTimer}
              className="w-full h-10 bg-sky-200 rounded"
            >
              PLAY
            </button>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TimerPage;

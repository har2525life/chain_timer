import React from "react";
import Header from "../components/Header";
import CreateButton from "../components/CreateButton";
import { IonContent, IonPage } from "@ionic/react";

function createCalender(): JSX.Element[] {
  const doms = [];
  for (let i = 1; i < 32; i++) {
    const dom = (
      <div key={i} className="h-20 border text-center">
        <span className="text-center">{i}</span>
        <p className="text-[8px] bg-sky-400 text-white rounded mb-[2px]">
          朝のルーティン
        </p>
        <p className="text-xs bg-sky-400 text-white  rounded mb-[2px]">
          就寝前
        </p>
        <p className="text-xs bg-sky-400 text-white  rounded mb-[2px]">運動</p>
      </div>
    );
    doms.push(dom);
  }
  return doms;
}

export default function LogPage() {
  return (
    <IonPage className="">
      <IonContent>
        <Header title="Log" />
        <div className="mx-8 grid grid-cols-7 grid-rows-1">
          <span className="text-center">日</span>
          <span className="text-center">月</span>
          <span className="text-center">火</span>
          <span className="text-center">水</span>
          <span className="text-center">木</span>
          <span className="text-center">金</span>
          <span className="text-center">土</span>
        </div>
        <div className="mx-8 grid grid-cols-7 grid-rows-6">
          {createCalender().map((day) => day)}
        </div>
      </IonContent>
    </IonPage>
  );
}

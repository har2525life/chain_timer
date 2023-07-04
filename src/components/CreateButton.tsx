import React from "react";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

export default function CreateButton() {
  console.log("create button");
  return (
    <div className="absolute bottom-[40px] right-[32px] ">
      <button className="p-10 bg-sky-200 rounded-full h-16 w-16 relative">
        <IonIcon aria-hidden="true" icon={add} className="text-center"/>
      </button>
    </div>
  );
}

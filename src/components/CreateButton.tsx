import React from "react";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { useHistory } from "react-router";

type PageName = {
  page: string;
};

export default function CreateButton({ page }: PageName) {
  console.log(page);
  const history = useHistory();
  const transitionPage = () => {
    switch (page) {
      case "/main":
        history.push("/register");
        return;
      case "/register":
        history.push("/add");
        return;
      case "add":
        return;
      default:
        throw new Error("path が違います。");
    }
  };

  // main +
  // register +
  // add check
  return (
    <div className="absolute bottom-[40px] right-[32px] ">
      <button
        onClick={transitionPage}
        className="p-10 bg-sky-200 rounded-full h-16 w-16 relative"
      >
        <IonIcon aria-hidden="true" icon={add} className="text-center" />
      </button>
    </div>
  );
}

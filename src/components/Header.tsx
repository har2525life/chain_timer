import React from "react";

type HeaderTitle = {
  title: string;
};

export default function Header({ title }: HeaderTitle) {
  return (
    <header>
      <div className="flex flex-col justify-center items-center h-14 bg-sky-400 border-gray-200 px-4">
        <h1 className=" text-black text-2xl font-bold ">{title}</h1>
      </div>
    </header>
  );
}

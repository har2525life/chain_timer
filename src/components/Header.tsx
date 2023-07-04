import React from "react";

type HeaderTitle = {
  title: string
}

export default function Header({title}: HeaderTitle) {
  return (
    <header>
      <nav className="bg-sky-400 border-gray-200 px-4 py-2.5">
        <h1 className="text-center text-black text-2xl font-bold h-20">{title}</h1>
      </nav>
    </header>
  );
}

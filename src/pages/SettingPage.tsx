import React from "react";
import Header from "../components/Header";

export default function SettingPage() {
  return (
    <div className="">
      <Header title="Setting" />
      <div className="mx-8">
        <div className="w-full leading-10 px-3 h-10 bg-gray-200 flex justify-between">
            <p>バージョン</p>
            <p>1.0.0</p>
        </div>
        <div className="w-full leading-10 px-3 h-10 bg-gray-200 flex flex-col align-center mt-8">ご意見Box</div>
        <div className="w-full leading-10 px-3 h-10 bg-gray-200 flex align-center mt-1">ヘルプ</div>
        <div className="w-full leading-10 px-3 h-10 bg-gray-200 flex align-center mt-8">バックアップ機能を有効にする</div>
      </div>
    </div>
  );
}

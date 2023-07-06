import { IonContent, IonPage } from "@ionic/react";
import React from "react";

export default function SendMessage() {
  return (
    <IonPage>
      <IonContent>
        <h1 className="text-center">Chain Timerへのご意見Box</h1>
        <p>
          Chain
          Timerへの改善点や、使いにくい個所などございましたらお気軽にお知らせいただければと思います。お知らせいただくことでより使いやすく改善し、皆様の一助となれば幸いです。
        </p>
        <div className="flex flex-col ">
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            placeholder="お名前を入力してください"
            className="border"
          />
        </div>
        <div className="">
          <p>ご使用のアプリ</p>
          <div className="flex flex-col">
            <label htmlFor="android">android</label>
            <input type="radio" id="android" name="app" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="web">web</label>
            <input type="radio" id="web" name="app" />
          </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" placeholder="メールアドレスをご入力ください" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="content">お問い合わせ内容</label>
            <textarea className="border" name="" id=""></textarea>
        </div>
      </IonContent>
    </IonPage>
  );
}

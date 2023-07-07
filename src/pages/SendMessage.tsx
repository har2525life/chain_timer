import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type Message = {
  name?: string;
  type: string;
  email?: string;
  description: string;
};

export default function SendMessage() {
  const { register, reset, handleSubmit } = useForm<Message>();
  const sendMessage = async (event: Message) => {
    // console.log(event);
    // console.log("test");
    // const { name, type, email, description } = event;
    await axios
      .post("http://localhost:3000/slack/message", {
        data: event,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch(async (error) => {
        // console.log(error)
        await axios.post("http://localhost:3000/slack/error", {
          data: error.message,
        });
      });
  };
  return (
    <IonPage>
      <IonContent>
        <div className="mx-3">
          <h1 className="text-center text-xl">Chain Timerへのご意見Box</h1>
          <p className="text-xs">
            Chain
            Timerへの改善点や、使いにくい個所などございましたらお気軽にお知らせいただければと思います。お知らせいただくことでより使いやすく改善し、皆様の一助となれば幸いです。
          </p>
          <form className="" onSubmit={handleSubmit(sendMessage)}>
            <div className="flex flex-col mt-3">
              <label htmlFor="name">お名前</label>
              <input
                {...register("name")}
                type="text"
                placeholder="お名前を入力してください"
                className="px-2 border focus:outline-none focus:ring focus:ring-sky-300"
              />
            </div>
            <div className="mt-3">
              <p>ご使用のアプリ</p>
              <div className="flex flex-col">
                <label htmlFor="android">android</label>
                <input
                  {...register("type")}
                  type="radio"
                  id="android"
                  value="android"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="web">web</label>
                <input
                  {...register("type")}
                  value="web"
                  type="radio"
                  id="web"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email">メールアドレス</label>
              <input
                {...register("email")}
                type="email"
                placeholder="メールアドレスをご入力ください"
                className="px-2 border focus:outline-none focus:ring focus:ring-sky-300"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="content">お問い合わせ内容</label>
              <textarea
                id="description"
                {...register("description")}
                className="px-2 border focus:outline-none focus:ring focus:ring-sky-300"
              ></textarea>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}

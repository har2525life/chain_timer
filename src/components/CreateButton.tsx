import { useHistory } from "react-router";
import { CheckmarkOutline, AddOutline } from "react-ionicons";

type PageName = {
  page?: string;
};

export default function CreateButton({ page }: PageName) {
  // console.log(page);
  const history = useHistory();
  const transitionPage = () => {
    switch (page) {
      case "/main":
        history.push({ pathname: "/habit", state: {name: "", id: ""} });
        return;
      case "/habit":
        history.push("/add");
        return;
      default:
        throw new Error("path が違います。");
    }
  };

  return (
    <div className="absolute bottom-[40px] right-[32px] ">
        <button
          onClick={transitionPage}
          className="p-10 bg-sky-200 rounded-full h-16 w-16 relative"
        >
          <AddOutline
            color={"#00000"}
            height="32px"
            width="32px"
            style={{
              fontWeight: "900",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              WebkitTransform: "translate(-50%, -50%)",
              // "-ms-transform": "translate(-50%, -50%) ",
            }}
          />
        </button>
    </div>
  );
}

import { useHistory } from "react-router";
import { CheckmarkOutline, AddOutline } from "react-ionicons";

type PageName = {
  page: string;
  style?: string;
};

export default function CreateButton({ page, style = "add" }: PageName) {
  // console.log(page);
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
      {page === "/add" || style === "check" ? (
        <button
          // onClick={transitionPage}
          className="p-10 bg-sky-200 rounded-full h-16 w-16 relative"
        >
          <CheckmarkOutline
            color={"#00000"}
            height="32px"
            width="32px"
            style={{
              "font-weight": "900",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "-webkit-transform": "translate(-50%, -50%)",
              "-ms-transform": "translate(-50%, -50%) ",
            }}
          />
        </button>
      ) : (
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
      )}
    </div>
  );
}

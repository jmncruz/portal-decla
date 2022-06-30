import { useParams } from "react-router-dom";

export function Settings() {
  const { param } = useParams<{ param: string }>()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 24 24"
      className={ param == "settings" ? "p-2 w-10 h-10 rounded-lg bg-slate-200" : "p-2 w-10 h-10 rounded-lg "}
      fill="black"
    >
      <path
        d="M15 24H9v-3.513a9 9 0 01-2.849-1.646L3.107 20.6l-3-5.2 3.043-1.755a9.1 9.1 0 010-3.29L.107 8.6l3-5.2 3.044 1.759A9 9 0 019 3.513V0h6v3.513a9 9 0 012.849 1.646L20.893 3.4l3 5.2-3.043 1.755a9.1 9.1 0 010 3.29l3.043 1.755-3 5.2-3.044-1.758A9 9 0 0115 20.487zm-4-2h2v-3.027l.751-.194a6.984 6.984 0 003.243-1.879l.543-.553 2.623 1.515 1-1.732-2.62-1.513.206-.746a7.048 7.048 0 000-3.75l-.206-.746 2.62-1.513-1-1.732-2.623 1.519-.543-.549a6.984 6.984 0 00-3.243-1.875L13 5.027V2h-2v3.027l-.751.194A6.984 6.984 0 007.006 7.1l-.543.553L3.84 6.134l-1 1.732 2.62 1.513-.206.746a7.048 7.048 0 000 3.75l.206.746-2.62 1.513 1 1.732 2.623-1.515.543.553a6.984 6.984 0 003.243 1.875l.751.194zm1-6a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2z"
        data-name="01 align center"
      ></path>
    </svg>
  );
}
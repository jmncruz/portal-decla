import { useParams } from "react-router-dom";

export function Users() {
  const { param } = useParams<{ param: string }>()
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      className={ param == "clients" ? "p-2 rounded-lg bg-slate-200 " : "p-2"}
      fill={param == "clients" ? "rgb(16 185 129)" : "black"}
    >
      <path d="M12 16a4 4 0 114-4 4 4 0 01-4 4zm-6.317 0H1a1 1 0 01-1-1 6.022 6.022 0 015.131-5.916 1 1 0 011.1 1.266A6.009 6.009 0 006 12a5.937 5.937 0 00.586 2.57 1 1 0 01-.9 1.43zM17 24H7a1 1 0 01-1-1 6 6 0 0112 0 1 1 0 01-1 1zm1-16a4 4 0 114-4 4 4 0 01-4 4zM6 8a4 4 0 114-4 4 4 0 01-4 4zm17 8h-4.683a1 1 0 01-.9-1.43A5.937 5.937 0 0018 12a6.009 6.009 0 00-.236-1.65 1 1 0 011.105-1.266A6.022 6.022 0 0124 15a1 1 0 01-1 1z"></path>
    </svg>
  );
}

"use client";

import { useHistory } from "~/lib/store";

export const BrowserCurrentUrl = () => {
  const history = useHistory();

  return (
    <>
      <span className="flex-none">
        {typeof window !== "undefined" && window.location.hostname}
      </span>
      <span className="flex-1 min-w-0 truncate text-white/70">
        {typeof window !== "undefined" &&
          (window.location.host.includes(":")
            ? `:${window.location.port}`
            : "")}
        {history.currentEntry()}
      </span>
    </>
  );
};

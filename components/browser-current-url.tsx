"use client";

import { useHistory } from "~/lib/store";

export const BrowserCurrentUrl = () => {
  const history = useHistory();

  return (
    <>
      <span className="flex-none">{window.location.hostname}</span>
      <span className="flex-1 min-w-0 truncate text-white/70">
        {window.location.host.includes(":") ? `:${window.location.port}` : ""}
        {history.currentEntry()}
      </span>
    </>
  );
};

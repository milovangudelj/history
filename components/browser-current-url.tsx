"use client";

import { useHistory } from "~/lib/store";
import { Lock, Warning } from "~/components/icons";

export const BrowserCurrentUrl = () => {
  const history = useHistory();

  const url = new URL(process.env.NEXT_PUBLIC_WEBSITE_URL!);

  return (
    <>
      {url.protocol === "https:" ? (
        <Lock className="w-3 h-3 mr-1.5 flex-none" />
      ) : (
        <Warning className="w-3 h-3 mr-1.5 flex-none" />
      )}
      <span>{url.hostname}</span>
      <span className="min-w-0 truncate text-white/70">
        {url.host.includes(":") ? `:${url.port}` : ""}
        {history.currentEntry() === "/" ? "" : history.currentEntry()}
      </span>
    </>
  );
};

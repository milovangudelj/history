"use client";

import { Suspense } from "react";

import { NavigationControls } from "~/components/navigation-controls";
import { BrowserCurrentUrl } from "~/components/browser-current-url";
import { ArrowsInSimple, ArrowsOutSimple, X } from "~/components/icons";

export const BrowserToolbar = () => {
  return (
    <div className="p-1.5 row-span-1 flex-none border-b border-white/[0.06]">
      <div className="flex gap-3 relative items-center justify-between">
        <div className="flex flex-1">
          <span
            className="flex items-center justify-center rounded-full cursor-pointer w-3 h-3 m-1 ml-1.5 bg-red-500 group text-red-950"
            onClick={() => {
              if (typeof window !== "undefined") window.close();
            }}
          >
            <X className="w-2 h-2 opacity-0 group-hover:opacity-100 transition" />
          </span>
          <span
            className="flex items-center justify-center rounded-full cursor-pointer w-3 h-3 m-1 bg-amber-500 group text-amber-950"
            onClick={() => {
              if (document.fullscreenElement) document.exitFullscreen();
            }}
          >
            <ArrowsInSimple className="w-2 h-2 opacity-0 group-hover:opacity-100 transition" />
          </span>
          <span
            className="flex items-center justify-center rounded-full cursor-pointer w-3 h-3 m-1 mr-1.5 bg-green-500 group text-green-950"
            onClick={() => {
              if (!document.fullscreenElement)
                document.body.requestFullscreen();
            }}
          >
            <ArrowsOutSimple className="w-2 h-2 opacity-0 group-hover:opacity-100 transition" />
          </span>
        </div>
        <div className="flex flex-[2_1_0%] min-w-0 items-center justify-center">
          <div className="flex items-center min-w-0 truncate text-sm max-w-96 px-1.5 py-0.5 bg-white/[0.06] rounded flex-1">
            <Suspense>
              <BrowserCurrentUrl />
            </Suspense>
          </div>
        </div>
        <NavigationControls />
      </div>
    </div>
  );
};

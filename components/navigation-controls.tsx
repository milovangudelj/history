"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { useHistory } from "~/lib/store";
import {
  ArrowsClockwise,
  CaretLeft,
  CaretRight,
  House,
} from "~/components/icons";

export const NavigationControls = () => {
  const router = useRouter();
  const history = useHistory();

  const [reloading, setReloading] = useState(false);

  const handleBackwardsNavigation = () => {
    history.back();

    if (!history.isEmpty()) {
      router.push(history.lastEntry());
    }
  };

  const handleForwardsNavigation = () => {
    history.forward();

    if (!history.isEmpty()) {
      router.push(history.lastEntry());
    }
  };

  return (
    <div className="flex flex-1 min-w-[108px] justify-end gap-1 items-center">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="rounded aria-disabled:text-white/40 hover:bg-white/[0.06] text-white/70 hover:text-white font-medium transition p-1.5"
      >
        <House className="w-3 h-3" />
      </button>
      <button
        onClick={() => {
          router.refresh();
          setReloading(true);
        }}
        className="rounded aria-disabled:text-white/40 hover:bg-white/[0.06] text-white/70 hover:text-white font-medium transition p-1.5"
      >
        <ArrowsClockwise
          onAnimationEnd={() => setReloading(false)}
          className={clsx("w-3 h-3", { "animate-spin-once": reloading })}
        />
      </button>
      <button
        onClick={handleBackwardsNavigation}
        aria-disabled={history.currentIndex <= 0}
        className="rounded aria-disabled:text-white/40 hover:bg-white/[0.06] text-white/70 hover:text-white font-medium transition p-1.5"
      >
        <CaretLeft className="w-3 h-3" />
      </button>
      <button
        onClick={handleForwardsNavigation}
        aria-disabled={
          (history.currentIndex <= 0 && history.urls.length <= 1) ||
          history.currentIndex === history.urls.length - 1
        }
        className="rounded aria-disabled:text-white/40 hover:bg-white/[0.06] text-white/70 hover:text-white font-medium transition p-1.5"
      >
        <CaretRight className="w-3 h-3" />
      </button>
    </div>
  );
};

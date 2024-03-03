"use client";

import { useRouter } from "next/navigation";

import { useHistory } from "~/lib/store";
import { CaretLeft, CaretRight } from "~/components/icons";

export const NavigationControls = () => {
  const router = useRouter();
  const history = useHistory();

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
    <div className="flex gap-1 relative items-center">
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

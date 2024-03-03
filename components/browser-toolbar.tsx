import { Lock } from "~/components/icons";
import { NavigationControls } from "~/components/navigation-controls";
import { BrowserCurrentUrl } from "~/components/browser-current-url";

export const BrowserToolbar = () => {
  return (
    <div className="p-1.5 row-span-1 flex-none border-b border-white/[0.06]">
      <div className="flex relative items-center justify-between">
        <div className="flex gap-2 relative p-1.5">
          <span className="block rounded-full w-3 h-3 bg-red-500"></span>
          <span className="block rounded-full w-3 h-3 bg-amber-500"></span>
          <span className="block rounded-full w-3 h-3 bg-green-500"></span>
        </div>
        <div className="flex absolute inset-0 items-center justify-center">
          <div className="flex items-center text-sm max-w-96 px-1.5 py-0.5 bg-white/[0.06] rounded flex-1">
            <Lock className="w-3 h-3 mr-1.5 flex-none" />
            <BrowserCurrentUrl />
          </div>
        </div>
        <NavigationControls />
      </div>
    </div>
  );
};

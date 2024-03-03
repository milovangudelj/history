"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { useHistory } from "~/lib/store";

export const RouterEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { visited, lastEntry, isEmpty } = useHistory();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.size > 0 ? searchParams.toString() : ""
    }`;

    if (isEmpty() || url.localeCompare(lastEntry()) !== 0) {
      visited(url);
    }
  }, [pathname, searchParams, visited, lastEntry, isEmpty]);

  return null;
};

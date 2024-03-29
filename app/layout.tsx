import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

import { BrowserToolbar } from "~/components/browser-toolbar";
import { RouterEvents } from "~/components/router-events";
import { Navbar } from "~/components/navbar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "History",
  description: "Let's make history!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} dark font-sans text-white`}
      >
        <div className="h-svh flex flex-col bg-gradient-to-tr from-zinc-950 via-yellow/50 to-zinc-950 p-6">
          <div className="bg-zinc-900 flex-1 grid grid-rows-[auto,_1fr] grid-cols-[100%] rounded-lg shadow-lg border border-white/[0.06] overflow-hidden">
            <BrowserToolbar />
            <div className="row-span-1 overflow-hidden flex flex-col bg-zinc-950 relative">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
        <Suspense>
          <RouterEvents />
        </Suspense>
      </body>
    </html>
  );
}

"use client";
import { Suspense } from "react";
import BackPage from "./components/BackPage";
import BottomPanel from "./components/BottomPanel";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#baa49e]">
      <Suspense>
      <MainPage />
      </Suspense>
      <BackPage />
    </main>
  );
}

"use client";
import BackPage from "./components/BackPage";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-200">
      <MainPage />
      <BackPage />
    </main>
  );
}

"use client";

import dynamic from "next/dynamic";

export const HeroSceneDynamic = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#050505]" />,
  }
);

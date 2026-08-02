"use client";

import dynamic from "next/dynamic";
import React from "react";

const Chatbot = dynamic(() => import("@/components/Chatbot/Chatbot"), { ssr: false });
const GitHubStats = dynamic(() => import("@/components/GitHubStats/GitHubStats"), { ssr: false });
const LeetCodeStats = dynamic(() => import("@/components/LeetCodeStats/LeetCodeStats"), { ssr: false });

export default function DynamicWidgets() {
  return (
    <>
      <GitHubStats />
      <LeetCodeStats />
      <Chatbot />
    </>
  );
}

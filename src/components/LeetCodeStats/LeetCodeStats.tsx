"use client";

import {
  Trophy,
  Code2,
  Brain,
  Flame,
} from "lucide-react";

export default function LeetCodeStats() {
  const stats = [
    {
      title:
        "Problems Solved",
      value: "500+",
      icon: Code2,
    },

    {
      title:
        "Medium Solved",
      value: "300+",
      icon: Brain,
    },

    {
      title:
        "Hard Solved",
      value: "100+",
      icon: Flame,
    },

    {
      title:
        "Contest Rating",
      value: "1800+",
      icon: Trophy,
    },
  ];

  return (
    <section
      className="
      py-32
      "
    >
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <p
            className="
            text-blue-500
            uppercase
            tracking-[5px]
            "
          >
            DSA
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            LeetCode
            <span className="gradient-text">
              Stats
            </span>
          </h2>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          "
        >
          {stats.map(
            (item) => {
              const Icon =
                item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-white/10
                  "
                >
                  <Icon
                    size={32}
                  />

                  <h3
                    className="
                    text-4xl
                    font-bold
                    mt-4
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-gray-500
                    mt-2
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
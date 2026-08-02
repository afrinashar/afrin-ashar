"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Users, Code2 } from "lucide-react";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubStats() {
  const [data, setData] =
    useState<GitHubData | null>(
      null
    );

  useEffect(() => {
    fetch(
      "https://api.github.com/users/afrinashar"
    )
      .then((res) =>
        res.json()
      )
      .then((data) =>
        setData(data)
      );
  }, []);

  if (!data) return null;

  const stats = [
    {
      title: "Repositories",
      value: data.public_repos,
      icon: Code2,
    },
    {
      title: "Followers",
      value: data.followers,
      icon: Users,
    },
    {
      title: "Following",
      value: data.following,
      icon: GitFork,
    },
    {
      title: "Stars",
      value: "100+",
      icon: Star,
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
            Open Source
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            GitHub
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
"use client";

import { blogs } from "@/data/Blogs";
import BlogCard from "./BlogCard";
import { useState } from "react";

export default function Blogs() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  return (
    <section
      id="blogs"
      className="py-32"
    >
      <div className="container mx-auto px-6">

        <div className="mb-20">
          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-500
            "
          >
            Articles
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            Latest
            <span className="gradient-text">
              {" "}
              Blogs
            </span>
          </h2>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >
         {blogs
  .slice(0, showAllBlogs ? blogs.length : 3)
  .map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
    />
  ))}
  {blogs.length > 3 && (
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setShowAllBlogs(!showAllBlogs)}
      className="px-6 py-2 rounded-lg bg-primary text-blue-500 hover:opacity-90 transition"
    >
      {showAllBlogs ? "Show Less" : "Show More Blogs"}
    </button>
  </div>
)}
        </div>
      </div>
    </section>
  );
}
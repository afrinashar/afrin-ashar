"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  blog: any;
}

export default function BlogCard({
  blog,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      overflow-hidden
      glass
      border
      border-white/10
      "
    >
      <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/40">
  <img
    src={blog.cover}
    alt={blog.title}
    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <div className="p-6">
    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
      {blog.category}
    </span>

    <h3 className="mt-4 text-2xl font-bold text-gray-900 line-clamp-2">
      {blog.title}
    </h3>

    <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
      {blog.excerpt}
    </p>

    <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
      <span>{blog.date}</span>
      <span>•</span>
      <span>{blog.readTime}</span>
    </div>

    <div className="mt-5 flex flex-wrap gap-2">
      {blog.tags.slice(0, 3).map((tag: string) => (
        <span
          key={tag}
          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>

    <a
      href={blog.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/40"
    >
      Read on Medium
     </a>
  </div>
</div>
    </motion.div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  certificate: any;
}

export default function CertificateCard({
  certificate,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-black/10
         bg-white
        glass
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-blue-100/40

        dark:border-gray-900
        // dark:bg-slate-900
        dark:hover:shadow-blue-900/20
      "
    >
      
        <>
          {/* <img
            src={certificate.image}
            alt={certificate.title}
            className="
              h-56
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          /> */}

          <div className="p-6">
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                dark:bg-blue-500/10
                px-3
                py-1
                text-xs
                font-semibold
                text-blue-600
                dark:text-blue-400
              "
            >
              {certificate.issuer}
            </span>

            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-black-900
                line-clamp-2
              "
            >
              {certificate.title}
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-gray-600
                dark:text-gray-400
                line-clamp-3
              "
            >
              {certificate.description}
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-sm
                // text-gray-500
                // dark:text-gray-400
              "
            >
              <span>Issued {certificate.issueDate}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {certificate.skills.slice(0, 3).map((skill: string) => (
                <span
                  key={skill}
                  className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-5
                py-3
                font-semibold
                // text-white
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-blue-300/40
              "
            >
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                View Certificate →
              </a>
            </div>
          </div>
        </>
     
    </motion.div>
  );
}
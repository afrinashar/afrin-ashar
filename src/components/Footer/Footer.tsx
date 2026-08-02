"use client";

import Link from "next/link";
import VisitorCounter from "@/components/VisitorCounter/VisitorCounter";

import { Mail, ArrowUp, Download } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
      relative
      border-t
      border-white/10
      mt-20
      "
    >
      <div className="container mx-auto px-6 py-16">

        {/* Top Section */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >
          {/* About */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
              "
            >
              Afrin Ashar
            </h3>

            <p
              className="
              mt-4
              text-gray-400
              leading-relaxed
              "
            >
              Full Stack Developer &
              AI Engineer building
              scalable web applications,
              AI systems and enterprise
              solutions.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4
              className="
              font-semibold
              mb-4
              "
            >
              Navigation
            </h4>

            <div
              className="
              flex
              flex-col
              gap-3
              "
            >
              <Link href="/">
                Home
              </Link>

              <a href="#services">
                Services
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}

          <div>
            <h4
              className="
              font-semibold
              mb-4
              "
            >
              Connect
            </h4>

            <div
              className="
              flex
              flex-col
              gap-4
              "
            >
              <a
                href="https://github.com/afrinashar"
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  {/* <Github size={18} /> */}
                  GitHub
                </div>
              </a>

              <a
                href="https://linkedin.com/in/afrin-ashar"
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  {/* <Linkedin size={18} /> */}
                  LinkedIn
                </div>
              </a>

              <a
                href="mailto:afrinashar1@gmail.com"
              >
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  Email
                </div>
              </a>
            </div>
          </div>

          {/* Resume */}

          <div>
            <h4
              className="
              font-semibold
              mb-4
              "
            >
              Resume
            </h4>

            <a
              href="/resume.pdf"
              download
              className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              "
            >
              Download CV

              <Download size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}

        <div
          className="
          h-px
          bg-white/10
          my-10
          "
        />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
          "
        >
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Afrin Ashar. All rights reserved.</p>


          <button
            onClick={scrollToTop}
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            glass
            border
            border-white/10
            "
          >
            Back To Top

            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
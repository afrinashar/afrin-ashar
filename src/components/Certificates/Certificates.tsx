"use client";
import { useState } from "react";
import { certificates } from "@/data/Certificates";
import CertificateCard from "./CertificateCard";

export default function Certificates() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  return (
    <section
      id="certificates"
      className="py-32"
    >
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <p
            className="
            uppercase
            text-blue-500
            tracking-[5px]
            "
          >
            Certifications
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            Professional
            <span className="gradient-text">
              {" "}
              Certifications
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
          {certificates
  .slice(0, showAllCertificates ? certificates.length : 3)
  .map((certificate) => (
    <CertificateCard
      key={certificate.id}
      certificate={certificate}
    />
  ))}
          {certificates.length > 3 && (
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setShowAllCertificates(!showAllCertificates)}
      className="px-6 py-2 rounded-lg bg-primary text-blue-500 hover:opacity-90 transition"
    >
      {showAllCertificates ? "Show Less" : "Show More Certificates"}
    </button>
  </div>
)}
        </div>
      </div>
    </section>
  );
}
import { certificates } from "@/data/Certificates";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const certificate =
    certificates.find(
      (item) =>
        item.id === slug
    );
console.log(slug,"slug");
console.log(certificates,"certificates");
  if (!certificate) {
    return (
      <div>
        Certificate Not Found
      </div>
    );
  }

  return (
    <main
      className="
      container
      mx-auto
      px-6
      py-24
      "
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="
        rounded-3xl
        w-full
        max-w-5xl
        mx-auto
        "
      />

      <div
        className="
        max-w-4xl
        mx-auto
        mt-12
        "
      >
        <h1
          className="
          text-5xl
          font-bold
          "
        >
          {certificate.title}
        </h1>

        <p
          className="
          mt-4
          text-blue-500
          "
        >
          {certificate.issuer}
        </p>

        <p className="mt-6">
          {certificate.description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-8
          "
        >
          {certificate.skills.map(
            (skill) => (
              <span
                key={skill}
                className="
                px-4
                py-2
                rounded-full
                bg-white/10
                "
              >
                {skill}
              </span>
            )
          )}
        </div>

        <a
          href={
            certificate?.verificationUrl}
          target="_blank"
          className="
          inline-block
          mt-10
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          text-white
          "
        >
          Verify Certificate
        </a>
      </div>
    </main>
  );
}
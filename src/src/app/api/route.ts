import { NextResponse } from "next/server";

import {
  portfolioData,
} from "@/data/portfolioData";

export async function POST(
  req: Request
) {
  const { message } =
    await req.json();

  const query =
    message.toLowerCase();

  let response =
    "Sorry, I don't know that yet.";

  if (
    query.includes("name")
  ) {
    response =
      portfolioData.name;
  }

  else if (
    query.includes(
      "experience"
    )
  ) {
    response = `
${portfolioData.name}
has
${portfolioData.experience}
of experience.
`;
  }

  else if (
    query.includes(
      "skills"
    )
  ) {
    response =
      portfolioData.skills.join(
        ", "
      );
  }

  else if (
    query.includes(
      "project"
    )
  ) {
    response =
      portfolioData.projects.join(
        ", "
      );
  }

  else if (
    query.includes(
      "certificate"
    )
  ) {
    response =
      portfolioData.certifications.join(
        ", "
      );
  }

  else if (
    query.includes(
      "contact"
    )
  ) {
    response =
      portfolioData.contact;
  }

  else if (
    query.includes(
      "about"
    )
  ) {
    response =
      portfolioData.about;
  }

  return NextResponse.json({
    answer: response,
  });
}
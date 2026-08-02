import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

export const heroAnimation =
  () => {
    gsap.from(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
        duration: 1,
      }
    );

    gsap.from(
      ".hero-image",
      {
        scale: 0,
        duration: 1.2,
      }
    );
  };

export const skillOrbitAnimation =
  () => {
    gsap.to(
      ".skill-item",
      {
        y: -50,
        rotation: 360,

        stagger: 0.1,

        scrollTrigger:
          {
            trigger:
              ".hero-section",

            start:
              "top top",

            scrub: true,
          },
      }
    );
  };

export const projectParallax =
  () => {
    gsap.utils
      .toArray(
        ".project-card"
      )
      .forEach(
        (card: any) => {
          gsap.to(card, {
            y: -100,

            scrollTrigger:
              {
                trigger:
                  card,

                start:
                  "top bottom",

                scrub: true,
              },
          });
        }
      );
  };

export const experienceReveal =
  () => {
    gsap.utils
      .toArray(
        ".experience-card"
      )
      .forEach(
        (card: any) => {
          gsap.from(card, {
            opacity: 0,
            y: 100,

            scrollTrigger:
              {
                trigger:
                  card,

                start:
                  "top 80%",
              },
          });
        }
      );
  };
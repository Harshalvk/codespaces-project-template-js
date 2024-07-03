/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Passionate Computer Science student with a keen interest in the ever-evolving tech landscape. Driven by a curiosity for innovative breakthroughs, I am determined to explore limitless possibilities. Eager to contribute to the dynamic field of full-stack web development, I thrive in collaborative environments and look forward to exchanging creative ideas.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML & CSS",
  "Tailwind",
  "Javascript",
  "ReactJS",
  "Redux Toolkit",
  "ExpressJS",
  "Typescript",
  "Mongoose",
  "MongoDB",
  "NextJS",
  "Turborepo",
  "Git / Github",
  "Frammer Motion",
  "NextAuth",
  "Prisma",
  "Postman",
  "Data structure",
  "OAuth",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
// /const detailOrQuote =
// "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;

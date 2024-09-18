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
import image from "../images/Mosiac.jpg";

const imageAltText = "Controller with background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a game development student of University of Central Punjab. I am passionate about Game Development and all fields related to It. I want to create one of the best singleplayer game. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Game Development and Design (PC and Mobile)",
  "User experience",
  "User Interface Design",
  "3D Modelling and Animation",
  "Gameplay Programming",
  "Gameplay Mechanics",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in innovate ways. I am also passionate about Game development and all fields related to it such as AI and Cloud Computing. I Love the way AI can be used in NPCs or simply to speed up the development process. I also love the way Cloud could be used to reduce the game size by hosting it on cloud or simply using cloud to provide multiplayer servers for game.";

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
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

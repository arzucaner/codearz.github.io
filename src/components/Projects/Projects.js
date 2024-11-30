import React from "react";
import styles from "./Projects.module.css";
import quickCuisineImage from "../../assets/images/projects/quickCuisineImage.png";
import whenWomenUnderstandImage from "../../assets/images/projects/whenWomenUnderstandImage.png";
import travelBrewImage from "../../assets/images/projects/travelBrewImage.png";
import triviaQuestImage from "../../assets/images/projects/triviaQuestImage.png";
import wwCodeImage from "../../assets/images/projects/wwCodeImage.png";
import goodnessOfNatureImage from "../../assets/images/projects/goodnessOfNatureImage.png";
import habitMasterImage from "../../assets/images/projects/habitMasterImage.png"; 
import chirpXImage from "../../assets/images/projects/chirpXImage.png"; 

const projects = [
  {
    title: "QuickCuisine - Fast and Delicious Recipes",
    description:
      "QuickCuisine is a React-based web application designed to provide a fast, efficient way to explore and share delicious recipes. This application utilizes a service worker to enhance performance through API caching and offers a dark mode feature for a customizable user experience.",
    image: quickCuisineImage,
    githubLink: "https://github.com/arzucaner/react-recipe-app",
    liveLink: "https://quickcuisine-live-link.com",
    videoLink: "https://youtu.be/xQQ9HRjpgSA",
  },
  {
    title: "When Women Understand",
    description:
      "A website initiative aimed at helping women recognize both physical violence and psychological abuse, empowering them to protect themselves. This project underscores the silent and hidden nature of psychological abuse, making it easy for women to recognize.",
    image: whenWomenUnderstandImage,
    githubLink: "https://github.com/arzucaner/when-women-understand",
    liveLink: "https://when-women-understand-live-link.com",
  },
  {
    title: "TravelBrew",
    description:
      "A mobile app to assist travellers in discovering the best coffee and cosy spots while visiting new cities. It highlights venues with essential needs like coffee, seating areas, and restrooms.",
    image: travelBrewImage,
    githubLink: "https://github.com/arzucaner/travel-brew",
  },
  {
    title: "React TriviaQuest Challenge",
    description:
      "An interactive trivia quiz application developed using React. It provides a fun experience to test general knowledge.",
    image: triviaQuestImage,
    githubLink: "https://github.com/arzucaner/react-triviaquest-challenge",
    liveLink: "https://react-triviaquest-challenge.netlify.app/",
  },
  {
    title: "Women Who Code's Days of Code Challenge",
    description:
      "Successfully completed the Women Who Code's Days of Code Challenge by coding for 100 consecutive days, creating numerous projects, and learning advanced concepts like Redux, Alpine.js, and Firebase.",
    image: wwCodeImage,
    githubLink: "https://github.com/arzucaner/wwcode-days-of-code-challenge",
  },
  {
    title: "Goodness of Nature",
    description:
      "A practice project for the 'Push Your Imagination with CSS Animation' event, showcasing creative use of CSS animations and HTML structure. Hosted on Netlify.",
    image: goodnessOfNatureImage,
    githubLink: "https://github.com/arzucaner/goodness-of-nature",
    liveLink: "https://fastidious-cascaron-b161bc.netlify.app/",
  },
  {
    title: "Habit Master Elite",
    description:
      "The Challenge App is designed to help users track their challenges in a more organized and disciplined way. It provides a user-friendly interface for making commits and monitoring progress towards set goals.",
    image: habitMasterImage,
    githubLink: "https://github.com/arzucaner/habit-master-elite",
    liveLink: "https://dynamic-axolotl-49c244.netlify.app/",
  },
  {
    title: "ChirpX",
    description:
      "ChirpX is a simple Twitter clone application where users can create tweets, like them, retweet them, and reply to them.",
    image: chirpXImage,
    githubLink: "https://github.com/arzucaner/ChirpX--Twitter-Clone-",
    liveLink: "https://mellow-cocada-a14e15.netlify.app/",
  },
];

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Solved Cases</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <div className={styles.projectLinks}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


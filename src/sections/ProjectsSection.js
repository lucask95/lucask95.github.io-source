import React from "react";
import SectionLayout from "./components/SectionLayout";

const projects = [
  {
    name: "lucask95.github.io",
    description:
      "You are here! My personal portfolio. Responsive design for both mobile and desktop.",
    url: "https://github.com/lucask95/lucask95.github.io-source",
    imageUrl: "img/github.png",
    date: "2021",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    name: "Watch First, Think Later",
    description:
      "A website to catalog all of my quick film reviews, and hopefully some short video content in the near-future.",
    url: "https://watch-first-think-later.vercel.app/",
    imageUrl: "img/wftl.jpg",
    date: "2021",
    technologies: ["React", "Next.js", "Next Auth", "MongoDB", "Material UI"],
  },
  {
    name: "Super Smash Bros. Melee PR Maker",
    description:
      "A tool to help administrators of regional Super Smash Bros. Melee Facebook groups to make player rankings images for their area. Aimed towards people without image-editing software like Photoshop.",
    url: "/projects/pr-helper/index.html",
    imageUrl: "img/prmaker.jpg",
    date: "2017",
    technologies: ["Javascript"],
  },
  {
    name: "Where to Buy Clothes",
    description:
      "A list of web stores from which men can buy clothing. Can be organized by style, price, and location.",
    url: "/projects/clothes/index.html",
    imageUrl: "img/clothes.jpg",
    date: "2017",
    technologies: ["JavaScript", "Skeleton"],
  },
  {
    name: "r/MaleFashionAdvice WAYWT Scraper",
    description:
      "A python script that automates the process of getting the top 3 submissions from each What Are You Wearing Today (WAYWT) thread for a given month. Automatically saves images and creates the markdown for a comment with the details for each post. Created for myself and the other moderators of the r/MaleFashionAdvice subreddit.",
    url: "https://github.com/lucask95/mfa-waywt-scraper",
    imageUrl: "img/mfascript.jpg",
    date: "2018",
    technologies: ["Python"],
  },
  {
    name: "Life Counter",
    description:
      "Just a little life counter to help me out when I play Magic: the Gathering. Designed for mobile devices.",
    url: "/projects/lifecounter/index.html",
    imageUrl: "img/lifecounter.jpg",
    date: "2019",
    technologies: ["Vue"],
  },
];

export default function ProjectsSection() {
  return (
    <SectionLayout header='Projects'>
      {projects.map((project, index) => (
        <div key={index} className='space-y-4 md:flex md:flex-row md:space-x-8'>
          <div className='md:w-1/3 md:flex-shrink-0'>
            <img
              src={project.imageUrl}
              alt={project.name}
              className='object-contain rounded'
            />
          </div>
          <div className='space-y-4'>
            <a
              href={project.url}
              className='text-3xl font-mono text-blue-500 underline'
            >
              {project.name}
            </a>
            <p className='text-gray-400 italic inline ml-4'>{project.date}</p>
            <p className='text-lg mb-4'>{project.description}</p>
            <ul className='text-gray-500'>
              {project.technologies.map((item) => (
                <li
                  key={item}
                  className='rounded-sm bg-gray-100 inline-block px-2 py-1 mr-2 mb-2'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </SectionLayout>
  );
}

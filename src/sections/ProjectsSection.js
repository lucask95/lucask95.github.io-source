import React from "react";

const projects = [
  {
    name: "lucask95.github.io",
    description: "You are here! My personal portfolio.",
    url: "https://lucask95.github.io/",
    imageUrl: "img/github.png",
    date: "2021",
    technologies: ["React", "tailwind-css"],
  },
  {
    name: "Watch First, Think Later",
    description:
      "A website to catalog all of my quick film reviews, and hopefully some short video content in the near-future.",
    url: "https://watch-first-think-later.vercel.app/",
    imageUrl: "img/wftl.jpg",
    date: "April 2021",
    technologies: ["React", "Next.js", "next-auth", "MongoDB", "Material UI"],
  },
  {
    name: "Super Smash Bros. Melee PR Maker",
    description:
      "A tool to help administrators of regional Super Smash Bros. Melee Facebook groups to make player rankings images for their area. Aimed towards people without image-editing software like Photoshop",
    url: "/projects/pr-helper/index.html",
    imageUrl: "img/prmaker.jpg",
    date: "",
    technologies: ["Javascript"],
  },
  {
    name: "Where to Buy Clothes",
    description:
      "A list of web stores from which men can buy clothing. Can be organized by style, price, and location.",
    url: "/projects/clothes/index.html",
    imageUrl: "img/clothes.jpg",
    date: "",
    technologies: ["JavaScript", "Skeleton"],
  },
  {
    name: "Life Counter",
    description:
      "Just a little life counter to help me out when I play Magic: the Gathering. Designed for mobile devices.",
    url: "/projects/lifecounter/index.html",
    imageUrl: "img/lifecounter.jpg",
    date: "",
    technologies: ["Vue"],
  },
];

export default function ProjectsSection() {
  return (
    <section>
      <h3 className='text-4xl mb-8'>Projects</h3>
      <div className='space-y-8 px-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='space-y-4 md:flex md:flex-row md:space-x-8'
          >
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
      </div>
    </section>
  );
}

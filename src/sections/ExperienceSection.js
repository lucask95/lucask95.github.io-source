import React from "react";
import SectionLayout from "./components/SectionLayout";

const experienceItems = [
  {
    title: "Software Engineer at Kyocera DDA",
    date: "2018 - Present",
    description: "Web developer working on ECM products.",
  },
  {
    title: "Test Engineer at Kyocera DDA",
    date: "2017 - 2018",
    description:
      "Performance and smoke testing on desktop and web applications.",
  },
  {
    title: "Education",
    date: "2013 - 2017",
    description: "Bachelors in Computer Engineering, UC Davis",
  },
];

const languages = ["JavaScript", "Java", "Python", "HTML", "CSS", "C#"];

const frameworks = [
  "React",
  "Apache Tapestry",
  "Next.js",
  "Material UI",
  "Styled Components",
  "Tailwind CSS",
  "Bootstrap",
];

export default function ExperienceSection() {
  return (
    <SectionLayout header='Experience'>
      <p className='text-lg'>
        This is just a quick snapshot. For more details, you can take a look at{" "}
        <a href='/lucas-keller-resume.pdf' className='text-blue-500 underline'>
          my resume
        </a>{" "}
        or{" "}
        <a
          href='https://www.linkedin.com/in/lucas-keller-535083116/'
          className='text-blue-500 underline'
        >
          my LinkedIn profile
        </a>
        .
      </p>
      {experienceItems.map((item) => (
        <div className='text-lg'>
          <p className='font-bold'>{item.title}</p>
          <p className='text-gray-400 italic'>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}

      <div className='text-lg grid grid-cols-2'>
        <div>
          <h4 className='font-bold mb-2'>Programming Languages</h4>
          <ul className='list-disc list-inside'>
            {languages.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-2'>Frameworks, Libraries, Etc.</h4>
          <ul className='list-disc list-inside'>
            {frameworks.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}

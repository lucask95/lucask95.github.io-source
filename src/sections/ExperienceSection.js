import React from "react";
import SectionLayout from "./components/SectionLayout";

const experienceItems = [
  {
    title: "Software Engineer at Kyocera DDA",
    date: "2018 - Present",
    description:
      "Collaborated with project managers and designers to develop, maintain, and improve frontend code for multiple flagship ECM web applications. Develop using JavaScript, TypeScript, and Java with React and Apache Tapestry.",
  },
  {
    title: "Test Engineer at Kyocera DDA",
    date: "2017 - 2018",
    description:
      "Conducted manual and automated testing on web and Windows applications using Ranorex, Selenium, JMeter, and others. Performed frontend web page optimization and performance analysis using Chrome developer tools, Apache JMeter.",
  },
  {
    title: "Education",
    date: "2013 - 2017",
    description: "Bachelors in Computer Engineering, UC Davis",
  },
];

const languages = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "C#",
];

const frameworks = [
  "React",
  "Apache Tapestry",
  "Next.js",
  "Material UI",
  "Styled Components",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
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
          <h4 className='font-bold mb-2'>
            Frameworks, Libraries, Servers, etc.
          </h4>
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

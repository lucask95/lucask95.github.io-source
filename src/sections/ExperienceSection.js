import React from "react";

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

export default function ExperienceSection() {
  return (
    <section className='mt-8 space-y-6 text-xl'>
      <h3 className='text-4xl mb-8 font-mono'>&gt; Experience</h3>
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
        <div>
          <p className='font-bold'>{item.title}</p>
          <p className='text-gray-400 italic'>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

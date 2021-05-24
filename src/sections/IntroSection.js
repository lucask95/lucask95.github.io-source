import React from "react";

export default function IntroSection() {
  return (
    <section className='space-y-8 md:mb-12 md:space-x-4 md:space-y-0 md:flex md:flex-row my-16 md:my-8'>
      <div
        className='flex md:w-1/5 md:flex-col justify-center md:h-auto'
        style={{ minWidth: 200 }}
      >
        <img
          src='/img/face.jpg'
          alt='Lucas'
          className='object-contain max-w-sm'
          style={{ borderRadius: 999 }}
        />
      </div>
      <div className='px-8 flex-1 flex flex-col justify-center'>
        <h3 className='text-3xl mb-4'>Hey, Lucas here.</h3>
        <p className='text-xl mb-2'>
          I'm a developer in the San Francisco Bay Area. My interests include
          photography, watching films, and playing Super Smash Bros Melee.
        </p>
        <p className='text-xl mb-1'>
          Browse around to check out my personal projects and work experience or
          just find out a little about me.
        </p>
        <p className='text-xl'>
          To contact me,{" "}
          <a
            href='mailto:lucaskeller1995@gmail.com'
            className='text-blue-500 underline'
          >
            send me an email
          </a>{" "}
          or{" "}
          <a
            href='https://www.linkedin.com/in/lucas-keller-535083116/'
            className='text-blue-500 underline'
          >
            message me on LinkedIn.
          </a>
        </p>
      </div>
    </section>
  );
}

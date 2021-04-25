import React from "react";

export default function IntroSection() {
  return (
    <section className='md:flex md:flex-row mb-8'>
      <div
        className='flex justify-center mb-8 md:mb-0'
        style={{ minWidth: 200 }}
      >
        <img
          src='/img/face.jpg'
          alt='Lucas'
          style={{ borderRadius: 999, width: 200, height: 200 }}
        />
      </div>
      <div className='px-8 flex-1'>
        <h3 className='text-3xl mb-4'>Hey, Lucas here.</h3>
        <p className='text-xl'>
          I'm a developer in the San Francisco Bay Area.
        </p>
        <p className='text-xl'>
          Browse around to check out my personal projects, work experience, or
          just find out a little about me.
        </p>
        <p className='text-xl'>
          To contact me,{" "}
          <a
            href='mailto:lucaskeller1995@gmail.com'
            className='text-blue-500 hover:underline focus:underline'
          >
            send me an email.
          </a>
        </p>
      </div>
    </section>
  );
}

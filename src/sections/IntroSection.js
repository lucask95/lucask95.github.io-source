import React from "react";

export default function IntroSection() {
  return (
    <section className='space-y-8 md:flex md:flex-row my-16 md:my-8'>
      <div className='flex justify-center' style={{ minWidth: 200 }}>
        <img
          src='/img/face.jpg'
          alt='Lucas'
          style={{ borderRadius: 999, width: 200, height: 200 }}
        />
      </div>
      <div className='px-8 flex-2'>
        <h3 className='text-3xl mb-4'>Hey, Lucas here.</h3>
        <p className='text-xl mb-2'>
          I'm a developer in the San Francisco Bay Area. My interests include
          photography, watching films, listening to music, eating jalapeño
          Kettle chips, and playing Super Smash Bros Melee.
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
            send me an email.
          </a>
        </p>
      </div>
    </section>
  );
}

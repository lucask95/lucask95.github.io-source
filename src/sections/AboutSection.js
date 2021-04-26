import React from "react";
import SectionLayout from "./components/SectionLayout";

const films = [
  {
    name: "Spirited Away",
    year: 2001,
    imageUrl: "img/about/films/spiritedaway.jpg",
  },
  {
    name: "Lady Bird",
    year: 2017,
    imageUrl: "img/about/films/ladybird.jpg",
  },
  {
    name: "La Jetée",
    year: 1962,
    imageUrl: "img/about/films/lajetee.jpg",
  },
  {
    name: "Waves",
    year: 2019,
    imageUrl: "img/about/films/waves.jpg",
  },
];

export default function AboutSection() {
  return (
    <SectionLayout header='About Me'>
      <div className='space-y-2'>
        <p>
          Hi, I'm Lucas. My hobbies include photography (both film and digital),
          watching movies, listening to music, eating chips, playing Magic: the
          Gathering, and playing Super Smash Bros Melee.
        </p>
        <p>
          I'm pretty tall &ndash; 6'5" &ndash; so if you need someone to reach
          high places then I'm your guy.
        </p>
        <p>
          The best way to get in touch with me is by{" "}
          <a
            href='mailto:lucaskeller1995@gmail.com'
            className='text-blue-500 underline'
          >
            emailing me
          </a>
          .
        </p>
      </div>
      <h4 className='text-2xl font-medium'>
        Get to Know Me &ndash; Lightning Round
      </h4>
      <div>
        <h5 className='font-medium mb-2'>Favorite Films</h5>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {films.map((film) => (
            <div key={film.name} className='space-y-2'>
              <img src={film.imageUrl} alt={film.name} className='rounded' />
              <div className='text-center'>
                {film.name}
                <span className='ml-2 text-base text-gray-400 italic'>
                  ({film.year})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

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

const albums = [
  {
    artist: "Sufjan Stevens",
    title: "Illinois",
    imageUrl: "img/about/albums/illinois.jpg",
  },
  {
    artist: "Tycho",
    title: "Dive",
    imageUrl: "img/about/albums/dive.jpg",
  },
  {
    artist: "The Postal Service",
    title: "Give Up",
    imageUrl: "img/about/albums/giveup.jpg",
  },
  {
    artist: "Chvrches",
    title: "The Bones of What You Believe",
    imageUrl: "img/about/albums/churches.jpg",
  },
];

const photos = [
  {
    src: "img/about/photos/1.jpg",
    alt: "car under a tree",
  },
  {
    src: "img/about/photos/2.jpg",
    alt: "shadow on a wall",
  },
  {
    src: "img/about/photos/3.jpg",
    alt: "olive tree next to an orange building",
  },
  {
    src: "img/about/photos/4.jpg",
    alt: "covered car under an American flag",
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

      <p>
        <span className='font-medium'>Super Smash Bros. Melee Main:</span> Fox
      </p>

      <p>
        <span className='font-medium'>Favorite Chip:</span> Jalapeño Kettle
        Chips
      </p>

      <p>
        <span className='font-medium'>
          Some of my Magic: the Gathering Commanders:
        </span>{" "}
        Kiki-Jiki, Mirror Breaker; The Scarab God; Ruric Thar, the Unbowed
      </p>

      <div>
        <h5 className='font-medium text-xl mb-4'>Some Photos I've Taken</h5>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {photos.map((photo) => (
            <div key={photo.alt} className='space-y-2'>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className='font-medium text-xl mb-4'>Favorite Films</h5>
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

      <div>
        <h5 className='font-medium text-xl mb-4'>Favorite Albums</h5>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {albums.map((album) => (
            <div key={album.title} className='space-y-2'>
              <img src={album.imageUrl} alt={album.title} className='rounded' />
              <div className='text-center'>
                <div>{album.artist}</div>
                <div className='text-gray-500 text-base'>{album.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

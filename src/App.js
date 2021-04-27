import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";

const links = [
  {
    text: "Email",
    iconUrl: "img/icons/mail.png",
    url: "mailto:lucaskeller1995@gmail.com",
  },
  {
    text: "Resume",
    iconUrl: "img/icons/document.png",
    url: "/lucas-keller-resume.pdf",
  },
  {
    text: "Github",
    iconUrl: "img/icons/github.png",
    url: "https://github.com/lucask95",
  },
  {
    text: "LinkedIn",
    iconUrl: "img/icons/linkedin.png",
    url: "https://www.linkedin.com/in/lucas-keller-535083116/",
  },
];

function App() {
  return (
    <div className='container mx-auto flex flex-col min-h-screen'>
      <header className='p-12 text-5xl border-b-2 border-black text-center md:flex md:flex-row md:justify-between'>
        <p className='font-bold'>Lucas Keller</p>
        <div>
          {links.map((link) => (
            <a href={link.url} key={link.text}>
              <img
                className='inline mr-4'
                src={link.iconUrl}
                alt={link.text}
                style={{ width: 35, height: 35 }}
              />
            </a>
          ))}
        </div>
      </header>

      <main className='flex-1 py-8 md:px-20'>
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
      </main>

      <footer className='space-y-2 p-8 border-t-2 border-black'>
        <div>
          {links.map((link) => (
            <a
              href={link.url}
              className='text-blue-500 underline mr-4'
              key={link.text}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div>
          Icons by{" "}
          <a
            href='https://icons8.com/'
            className='text-blue-500 underline mr-4'
          >
            Icons8
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

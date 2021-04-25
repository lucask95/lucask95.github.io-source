import ExperienceSection from "./sections/ExperienceSection";
import IntroSection from "./sections/IntroSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className='container mx-auto flex flex-col min-h-screen'>
      <header className='p-8 text-5xl border-b-2 border-black'>
        <p className='font-bold'>Lucas Keller</p>
      </header>

      <main className='flex-1 py-8 md:px-20'>
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>

      <footer>Github Linkedin Resume Contact</footer>
    </div>
  );
}

export default App;

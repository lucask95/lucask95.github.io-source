import IntroSection from "./sections/IntroSection";

function App() {
  return (
    <div className='container mx-auto flex flex-col min-h-screen'>
      <header className='p-8 text-5xl border-b-2 border-black'>
        <p className='font-bold'>Lucas Keller</p>
      </header>

      <main className='flex-1 py-8 px-20'>
        <IntroSection />
      </main>

      <footer>Github Linkedin Resume Contact</footer>
    </div>
  );
}

export default App;

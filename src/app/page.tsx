import AboutHeroImage from '../../public/AllieLooktoSide.webp';
import ServicesHero from '@/components/ServicesHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrid (Alex) Lapinski | Software Architecture & Integration',
  description: 'Remote software architect & consultant in Philadelphia Area. 15+ years in fintech/healthcare. Enterprise architecture, system integration, technical leadership.',
};

function App() {
  return (
    <div className="bg-white pl-8 pr-5 md:pl-12 pt-8">
      <div className="">
        <h1 className="text-3xl font-semibold pb-8">Rainbow Fern Consulting</h1>
        <div className="">
          <img className="float-left mr-5 mb-5 w-[37%] md:w-[40%] md:float-right md:ml-8 rounded-lg" 
          src={AboutHeroImage.src} alt="About Hero Image" />
          <p className="mb-5 text-sm">Hi! I&apos;m Astrid, I also go by Alex, and I&apos;m the founder of Rainbow Fern Consulting.</p>
          <p className="mb-5 text-sm">I have worked in the software field for the last 15+ years working up the corp ladder from intern to architect.</p>
          <p className="mb-5 text-sm">Now, I am focusing on taking on remote projects, mentoring and helping develop amazing test automation suites.</p>
          <p className="pb-5 text-sm">Take a look below at some recent projects, or details on what I offer as services.</p>
          <p className="clear-left md:clear-right size-0">&nbsp;</p>
        </div>
      </div>

      <section id="current-projects-hero" className="my-18">
        <h2 className="text-md font-semibold mb-5">Current Projects</h2>
        <div className="flex gap-0">
          <div className="w-1/3">
            <h3 className="text-sm font-bold mb-2">Portfolio Website</h3>
            <p className="text-xs text-gray-600 pr-5">This site itself. Building out a new professional portfolio website.</p>
          </div>

          <div className="w-1/3">
            <h3 className="text-sm font-bold mb-2">Receipt Parser</h3>
            <p className="text-xs text-gray-600 pr-5">A series of python scripts and integration with AI models to parse out receipts for budgeting.</p>
          </div>

          <div className="w-1/3">
            <h3 className="text-sm font-bold mb-2">Statement Summarizer</h3>
            <p className="text-xs text-gray-600 pr-5">A set of python scripts to extract data from bank statements and summarize.</p>
          </div>
        </div>
        <a
            href="/projects"
            className="inline-block bg-gray-600 text-white text-sm mt-4 px-6 py-2 rounded-md hover:bg-gray-400 hover:text-gray-700 transition-colors"
          >
            See My Projects
          </a>
      </section>

      <div className="w-auto">
          <div className="border-gray-200 border-t p-4">&nbsp;</div>
      </div>

      <ServicesHero />
    </div>
  )
}

export default App;

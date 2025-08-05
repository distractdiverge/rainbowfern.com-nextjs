import ProjectCardComponent from "@/components/Project-Card";

function Projects() {
  //useSeo({ 
  //  title: 'Projects | Alex Lapinski',
  //  description: 'Explore a selection of recent projects by Alex Lapinski, including a portfolio website and an AI-powered offline research assistant. View details and links to the code.' 
  //});

  const heroStyle = {
    backgroundImage: "url('https://picsum.photos/id/210/1200/400')", // Placeholder background
  };

  return (
    <>
      <div
        className="bg-cover bg-center text-white text-center py-20 px-5 relative"
        style={heroStyle}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-0"></div>
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-5">Projects</h1>
          <p className="text-xl mb-8">
            A list of my most recent projects, and links to the code and details.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-md text-base font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-800">
            Button
          </button>
        </div>
      </div>

      <div className="py-10 px-5 max-w-6xl mx-auto">
        <ProjectCardComponent
          name="Collaborative Text Editor"
          description="An Electron-based desktop application that enables real-time collaborative text editing, featuring AI-powered code generation and task execution capabilities."
          imageUrl="https://picsum.photos/id/42/600/400" // Placeholder image - PLEASE UPDATE
          detailsUrl="#" // Placeholder link - PLEASE UPDATE
          githubUrl="https://github.com/distractdiverge/text-ai-collab-tool"
          imagePosition="left" // Alternating from the next one
        />
        <ProjectCardComponent
          name="Portfolio Website"
          description="This website, showcasing my projects, experience, and skills."
          imageUrl="https://picsum.photos/id/119/600/400" // Placeholder image
          detailsUrl="#" // Placeholder link
          githubUrl="https://github.com/distractdiverge/portfolio-website"
          imagePosition="right"
        />
        <ProjectCardComponent
          name="Offline Research Team"
          description="This project showcases an innovative integration of CrewAI with Chainlit, creating a real-time interactive AI development assistant. It leverages CrewAI's multi-agent system to handle complex development tasks collaboratively, while Chainlit provides a user-friendly interface for monitoring and interacting with the AI agents. The system features real-time event handling and message streaming, allowing users to track agent activities, task progress, and outputs in a structured, conversational format. This project demonstrates advanced AI orchestration and user experience design, making it an excellent showcase for modern AI-powered development workflows."
          imageUrl="https://picsum.photos/id/20/600/400" // Placeholder image
          detailsUrl="#" // Placeholder link
          githubUrl="https://github.com/distractdiverge/poc-crewai"
          imagePosition="left"
        />
      </div>
    </>
  );
}

export default Projects;
  
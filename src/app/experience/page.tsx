
// Define a type for individual experience items
type ExperienceItem = {
  title: string;
  company: string;
  location?: string; // Optional, as some entries might be remote
  dates: string;
  responsibilities: string[];
};

// Sample data based on the image (you'll want to replace this with your actual data)
const experiences: ExperienceItem[] = [
  {
    title: 'Independent Contractor & Software Engineer',
    company: 'Self-Employed, Remote',
    dates: 'March 2023 - Present',
    responsibilities: [
      'Research and Prototyping - Explored AI/ML integrations (OpenAI) and developed software prototypes (e.g. local AutoGPT for long-term tasks), Set up local instances of popular LLMs (Llama, OpenAI) for advanced experimentation.',
      'Software Development - Built a proof-of-concept Python project that reduced bank statement reviews from days to minutes, and developed a NodeJS portfolio website, deployed and managed by Netlify\'s serverless infrastructure.',
      'Professional Development - Established new work processes, oversaw task and project management, and initiated LLC formation.',
      'Client Engagement - Met with prospective clients, to discuss process, pricing and overall timelines and deliverable expectations.'
    ],
  },
  {
    title: 'Principal Technical Staff (Software Architecture) for Credit Platform',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2019 - March 2023',
    responsibilities: [
      'Member of the architecture team guiding the credit platform.',
      'Responsible for creating high-level architectures and plans to implement product needs.',
      'Worked closely with Product and Senior Engineers to ensure that the technical solution meets architectural goals of the credit platform.',
      'Mentored senior engineers interested in architectural path.'
    ],
  },
  {
    title: 'Senior Engineer in Business Financing',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2017 - 2019',
    responsibilities: [
        'Led a small focused team of 3 engineers and 1 QA engineer in management of all front-end projects such as internal tools, and customer facing websites.',
        'Spent part of this role leading Swift Financial engineering integration with PayPal Credit.',
        'Led architectural solutions for strategic projects to enable PayPal integration.'
    ]
  },
  {
    title: 'Lead Software Engineer',
    company: 'PayPal, Conshohocken & Remote',
    dates: '2016 - 2017',
    responsibilities: [
      'Led a small focused team of 3 engineers and 1 QA engineer in management of all front-end projects such as internal tools, and customer facing websites.',
      'Spent part of this role leading Swift Financial engineering integration with PayPal Credit.',
      'Led architectural solutions for strategic projects to enable PayPal integration.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Swift Capital, Conshohocken',
    dates: '2014 - 2015',
    responsibilities: [
      'Full Stack Developer and member of the .NET Agile Web Development Team.',
      'Worked as a Senior Developer in completing a new website designed to offer short-term business loans to small businesses.',
      'Primary role was to support development in Angular JS and ASP.NET on the server side.', 
      'During this time, I brought in more modern front-end build tools using gulp and enriched the existing front-end development techniques.'
    ]
  },
  {
    title: 'Principal Developer',
    company: 'Razorfish Healthware, Philadelphia',
    dates: '2012 - 2014',
    responsibilities: [
      'Full Stack Developer with focus on user interaction with software as well as overall software architecture.',
      'Designed numerous .NET / C# solutions (including front and back end architectures).',
      'Worked closely with the client to determine the optimal UI/UX experience of a software platform.',
      'Worked as a lead developer / technical architect to manage remote teams of developers across europe and the US.'
    ]
  },
  {
    title: 'Senior Developer',
    company: 'Razorfish Health, Philadelphia',
    dates: '2010 - 2012',
    responsibilities: [
      'Full Stack developer with a focus on User Experience.',
      'Worked closely with the client to determine UI / UX, and Information Architecture',
      'Mentored Junior Engineers',
      'Responsible for Interviewing Interns'
    ]
  },
  {
    title: 'Presentation Layer Developer',
    company: 'Avenue A | Razorfish, Philadelphia',
    dates: '2007 - 2010',
    responsibilities: [
      'Front-End Developer with focus on client-side technologies and architectures.',
      'Worked with HTML, CSS, JS in creating front-end solutions.',
      'Worked on backend solutions as well as front-end, focus on display of content via quick server-side frameworks.'
    ]
  }
  // Add more experiences here following the same structure
];

import type { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Experience | Alex &apos;Astrid&apos; Lapinski',
  description: 'Review the extensive professional experience of Alex &apos;Astrid&apos; Lapinski, from Principal Technical Staff at PayPal to Independent Contractor, showcasing a career in software engineering and architecture.' 
};

function Experience() {
  
  return (
    <div className="py-10 px-5 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Experience</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-12 text-center md:text-left">
        A collection of my professional experiences, showcasing my journey from intern to architect, and my current focus on software development and test automation.
      </p>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
            <p className="text-md text-gray-700 mb-2">
              {exp.company} {exp.location && `| ${exp.location}`} | {exp.dates}
            </p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
  
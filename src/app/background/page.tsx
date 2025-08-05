import React from 'react';

const educationData = [
  {
    degree: 'Masters of Science in Software Engineering',
    institution: 'Drexel, Philadelphia',
    year: '2017',
    focus: 'Machine Learning and Artificial Intelligence'
  },
  {
    degree: 'Bachelors of Science in Computer Science',
    institution: 'Drexel, Philadelphia',
    year: '2008',
    focus: 'Machine Learning and Artificial Intelligence'
  },
];

// TODO: Add icons for each skill
// Icons: https://devicon.dev/

// Devicon icon names mapping
const deviconMap: Record<string, {name: string, version?: string}> = {
  'UML': {name: 'unifiedmodelinglanguage', version: 'plain'},
  'C#': {name: 'csharp', version: 'line'},
  'Python': {name: 'python', version: 'original'},
  '.NET': {name: 'dot-net', version: 'plain'},
  'Javascript': {name: 'javascript', version: 'original'},
  'NodeJS': {name: 'nodejs', version: 'original-wordmark'},
  'jQuery': {name: 'jquery', version: 'plain'},
  'Typescript': {name: 'typescript', version: 'original'},
  'AngularJS': {name: 'angularjs', version: 'plain'},
  'React': {name: 'react', version: 'original-wordmark'},
  'Team City': {name: 'jetbrains', version: 'original'},
  'NextJS': {name: 'nextjs', version: 'original-wordmark'},
  'Bootstrap': {name: 'bootstrap', version: 'original'},
  'LESS': {name: 'less', version: 'plain-wordmark'},
  'SASS': {name: 'sass', version: 'original'},
  'Java': {name: 'java', version: 'original-wordmark'},
  'BackboneJS': {name: 'backbonejs', version: 'original' },
  'Ruby': {name: 'ruby', version: 'original'},
  'PHP': {name: 'php', version: 'plain'},
  'Vite': {name: 'vite', version: 'original'},
  'Figma': {name: 'figma', version: 'original'},
  'Jenkins': {name: 'jenkins', version: 'original' },
  'Confluence': {name: 'confluence', version: 'original' },
  'Jira': {name: 'jira', version: 'original' },
  'Bamboo': {name: 'bamboo', version: 'original' },
  'Drupal': {name: 'drupal', version: 'original' },
  'Wordpress': {name: 'wordpress', version: 'plain' },
};

// Icon component that renders Devicon SVG with fallback
const DevIcon = ({ 
  name, 
  className = '' 
}: { 
  name: string; 
  className?: string 
}) => {
  const icon = deviconMap[name] || null;
  const iconName = icon ? icon.name : null;
  const iconVersion = icon ? icon.version ? icon.version : 'original' : 'original';
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-${iconVersion}.svg`;
  
  return iconName ? (
    <img 
      src={iconUrl} 
      alt={name} 
      className={`w-5 h-5 ${className}`}
    />
  ) : (
    <div className="flex items-center justify-center w-5 h-5 rounded text-xs font-medium">
      {name[0]}
    </div>
  );
};

const skillsData = {
  languagesAndFrameworks: [
    { name: 'UML', years: '17 years' },
    { name: 'C#', years: '17 years' },
    { name: 'Python', years: '17 years' },
    { name: '.NET', years: '17 years' },
    { name: 'Javascript', years: '17 years' },
    { name: 'NodeJS', years: '17 years' },
    { name: 'jQuery', years: '10 years' },
    { name: 'Typescript', years: '10 years' },
    { name: 'AngularJS', years: '8 years' },
    { name: 'React', years: '8 years' },
    { name: 'Team City', years: '7 years' },
    { name: 'Miro', years: '6 years' },
    { name: 'NextJS', years: '6 years' },
    { name: 'Java', years: '6 years' },
    { name: 'Bootstrap', years: '5 years' },
    { name: 'LESS', years: '5 years' },
    { name: 'SASS', years: '5 years' },    
    { name: 'BackboneJS', years: '3 years' },
    { name: 'Ruby', years: '2 years' },
    { name: 'PHP', years: '2 years' },   
    { name: 'Vite', years: '1 year' },
  ],
  techniquesAndRoles: [
    { name: 'Technical Reqs', years: '17 years' },
    { name: 'Functional Reqs', years: '17 years' },
    { name: 'Code Review', years: '17 years' },
    { name: 'Release Mgmt', years: '10 years' },
    { name: 'Integration Mgmt', years: '10 years' },
    { name: 'Annotated Specs', years: '10 years' },
    { name: 'Stakeholder Int.', years: '6 years' },
    { name: 'Dev Team Lead', years: '6 years' },
    { name: 'Wireframes', years: '6 years' },
  ],
  tools: [
    { name: 'Jenkins', years: '10 years' },
    { name: 'Confluence', years: '8 years' },
    { name: 'Redmine', years: '8 years' },
    { name: 'Jira', years: '8 years' },
    { name: 'Bamboo', years: '6 years' },
    { name: 'Omnigraffle', years: '5 years' },
    { name: 'Figma', years: '5 years' },
    { name: 'Drupal', years: '3 years' },
    { name: 'Wordpress', years: '2 years' },
    { name: 'Adobe CQS', years: '1 year' },
  ],
};

const colorMap = (years: string): string => {
  // Extract the first number from the years string (e.g., "5 years" -> 5)
  const yearsMatch = years.match(/\d+/);
  const yearsInt = yearsMatch ? parseInt(yearsMatch[0], 10) : 0;

  if (yearsInt >= 15) {
    return 'bg-purple-100 text-purple-700';      // Deepest color for most experience (15+ years)
  } else if (yearsInt >= 10) {
    return 'bg-indigo-100 text-indigo-700';      // Rich color for extensive experience (10-14 years)
  } else if (yearsInt >= 5) {
    return 'bg-blue-100 text-blue-700';          // Medium color for intermediate experience (5-9 years)
  } else if (yearsInt >= 3) {
    return 'bg-teal-100 text-teal-700';          // Lighter color for some experience (3-4 years)
  } else if (yearsInt >= 1) {
    return 'bg-emerald-100 text-emerald-700';    // Light color for beginner experience (1-2 years)
  } else {
    return 'bg-gray-100 text-gray-700';          // Neutral for minimal experience (<1 year)
  }
}

const colorMapIcon = (years: string): string => {
  // Extract the first number from the years string (e.g., "5 years" -> 5)
  const yearsMatch = years.match(/\d+/);
  const yearsInt = yearsMatch ? parseInt(yearsMatch[0], 10) : 0;

  if (yearsInt >= 15) {
    return 'bg-purple-200 text-purple-700';      // Deepest color for most experience (15+ years)
  } else if (yearsInt >= 10) {
    return 'bg-indigo-200 text-indigo-700';      // Rich color for extensive experience (10-14 years)
  } else if (yearsInt >= 5) {
    return 'bg-blue-200 text-blue-700';          // Medium color for intermediate experience (5-9 years)
  } else if (yearsInt >= 3) {
    return 'bg-teal-200 text-teal-700';          // Lighter color for some experience (3-4 years)
  } else if (yearsInt >= 1) {
    return 'bg-emerald-200 text-emerald-700';    // Light color for beginner experience (1-2 years)
  } else {
    return 'bg-gray-200 text-gray-700';          // Neutral for minimal experience (<1 year)
  }
}
  

const SkillTag: React.FC<{ name: string; years: string }> = ({ name, years }) => {
  const colorClasses = colorMap(years);
  const iconClasses = colorMapIcon(years);
  
  return (
    <div className={`${colorClasses} p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-center">
        <span className={`${iconClasses} flex items-center justify-center w-6 h-6 rounded-full mr-2`}>
          <DevIcon name={name} className={' '} />
        </span>
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs">{years}</p>
      </div>
      </div>
    </div>
  );
};

function EducationAndSkills() {
  //useSeo({ 
  //  title: 'Education & Skills | Alex Lapinski',
  //  description: 'Discover the educational background and extensive skill set of Alex Lapinski, including proficiency in C#, Python, React, and various development tools and techniques.' 
  //});

  const heroBackgroundImage = 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'; // Placeholder image

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 md:py-32 text-white"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 md:p-10 rounded-lg inline-block max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h1>
            <p className="text-lg md:text-xl text-gray-700">
            From formal education to hands-on expertise, my journey in technology has been driven by a passion for continuous learning and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        {/* Education List */}
        <div className="mb-12 md:mb-16">
          <ul className="space-y-3">
            {educationData.map((edu, index) => (
              <li key={index} className="text-lg text-gray-700 list-disc list-inside ml-4">
                <span className="font-semibold">{edu.degree}</span> | {edu.institution} | {edu.year}
                <p className="text-sm text-gray-600">Focus: {edu.focus}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Sections */}
        <div className="space-y-12 md:space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Languages and Frameworks</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.languagesAndFrameworks.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Techniques and Roles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.techniquesAndRoles.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.tools.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} years={skill.years} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationAndSkills;

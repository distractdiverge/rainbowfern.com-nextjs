export type HeadingExpectation = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    name: string;
};

export type ButtonExpectation = {
    name: string;
    exact?: boolean;
};

export type LinkExpectation = {
    name: string;
    exact?: boolean;
};

export interface PageSEOExpectations {
    name: string;
    /** Route segment to append to the baseURL configured in Playwright */
    path: string;
    title: string;
    description: string;
    headings: HeadingExpectation[];
    links?: LinkExpectation[];
    buttons?: ButtonExpectation[];
}

export const seoPages: PageSEOExpectations[] = [
    {
        name: 'Home',
        path: '/',
        title: 'Astrid (Alex) Lapinski | Software Architecture & Integration',
        description:
            'Remote software architect & consultant in Philadelphia Area. 15+ years in fintech/healthcare. Enterprise architecture, system integration, technical leadership.',
        headings: [
            { level: 1, name: 'Rainbowfern.com' },
            { level: 1, name: 'Rainbow Fern Consulting' },
            { level: 2, name: 'Current Projects' },
            { level: 3, name: 'Portfolio Website' },
            { level: 3, name: 'Receipt Parser' },
            { level: 3, name: 'Statement Summarizer' },
            { level: 2, name: 'What I Do' },
            { level: 3, name: 'Software Engineering Consulting' },
            { level: 3, name: 'Software Test Automation' },
            { level: 3, name: 'Engineering Mentoring' },
        ],
        links: [
            { name: 'See My Projects', exact: true },
            { name: 'Contact Me', exact: true },
        ],
    },
    {
        name: 'Projects',
        path: '/projects',
        title: 'Projects | Astrid (Alex) Lapinski | Software Architecture',
        description:
            'Architecture and integration implementations with accessible code. Enterprise systems, fintech solutions, AI/ML prototypes. Real-world projects from 15+ years.',
        headings: [
            { level: 1, name: 'Rainbowfern.com' },
            { level: 1, name: 'Projects' },
            { level: 2, name: 'Collaborative Text Editor' },
            { level: 2, name: 'Portfolio Website' },
            { level: 2, name: 'Offline Research Team' },
        ],
    },
    {
        name: 'Experience',
        path: '/experience',
        title: 'Career Experience | Astrid (Alex) Lapinski | Architect',
        description:
            '15+ years as Principal Architect and engineer in regulated fintech and healthcare. Led enterprise architecture, system integrations, cross-team coordination.',
        headings: [
            { level: 1, name: 'Rainbowfern.com' },
            { level: 1, name: 'Experience' },
            { level: 2, name: 'Independent Contractor & Software Engineer' },
            { level: 2, name: 'Principal Technical Staff (Software Architecture) for Credit Platform' },
            { level: 2, name: 'Senior Engineer in Business Financing' },
            { level: 2, name: 'Lead Software Engineer' },
            { level: 2, name: 'Senior Software Engineer' },
            { level: 2, name: 'Principal Developer' },
            { level: 2, name: 'Senior Developer' },
            { level: 2, name: 'Presentation Layer Developer' },
        ],
    },
    {
        name: 'Education',
        path: '/education',
        title: 'Skills & Education | Astrid (Alex) Lapinski | Architect',
        description:
            'Technical expertise: Python, TypeScript, Java, .NET, AWS. Enterprise architecture, system integration, 15+ years experience. MS Software Engineering, Drexel.',
        headings: [
            { level: 1, name: 'Rainbowfern.com' },
            { level: 1, name: 'Education' },
            { level: 2, name: 'Languages and Frameworks' },
            { level: 2, name: 'Techniques and Roles' },
            { level: 2, name: 'Tools' },
        ],
    },
    {
        name: 'Contact',
        path: '/contact',
        title: 'Hire Astrid (Alex) Lapinski | Architecture Consulting',
        description:
            'Available for architecture consulting, enterprise integration, and technical leadership projects. Remote services for Philadelphia Area and nationwide clients.',
        headings: [
            { level: 1, name: 'Rainbowfern.com' },
            { level: 1, name: 'Contact' },
            { level: 2, name: 'Contact me' },
        ],
        buttons: [
            { name: 'Submit', exact: true },
        ],
    },
];
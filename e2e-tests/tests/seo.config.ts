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
        title: 'Alex Lapinski | Software & Automation Consultant',
        description:
            'Welcome to the portfolio of Alex Lapinski. Specializing in software development, test automation, and project mentorship with over 18 years of experience.',
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
        title: 'Projects | Alex Lapinski',
        description:
            'Explore a selection of recent projects by Alex Lapinski, including a portfolio website and an AI-powered offline research assistant. View details and links to the code.',
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
        title: 'Experience | Alex Lapinski',
        description:
            'Review the extensive professional experience of Alex Lapinski, from Principal Technical Staff at PayPal to Independent Contractor, showcasing a career in software engineering and architecture.',
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
        title: 'Education & Skills | Alex Lapinski',
        description:
            'Discover the educational background and extensive skill set of Alex Lapinski, including proficiency in C#, Python, React, and various development tools and techniques.',
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
        title: 'Contact | Alex Lapinski',
        description:
            "Get in touch with Alex Lapinski to discuss potential projects, collaborations, or mentorship opportunities. Let's build something impactful together.",
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

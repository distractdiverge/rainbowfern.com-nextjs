import React from 'react';
// Removed: import "./project-card.css";

type ProjectCardProps = {
    name: string;
    description: string;
    imageUrl: string;
    detailsUrl?: string;
    githubUrl?: string;
    imagePosition: 'left' | 'right';
};

const ProjectCardComponent: React.FC<ProjectCardProps> = ({
    name,
    description,
    imageUrl,
    detailsUrl,
    githubUrl,
    imagePosition
}) => {
    const cardBaseClasses = "flex flex-col md:flex-row bg-white rounded-lg shadow-lg mb-10 overflow-hidden p-5 items-stretch md:items-center";

    const imageContainerBaseClasses = "order-1 w-full md:w-2/5 flex-none mb-5 md:mb-0";
    const imageContainerPositionClasses = imagePosition === 'left'
        ? "md:order-1 md:mr-5"
        : "md:order-2 md:ml-5";

    const detailsContainerBaseClasses = "flex flex-col order-2 md:flex-1";
    const detailsContainerPositionClasses = imagePosition === 'left'
        ? "md:order-2"
        : "md:order-1";

    const buttonBaseClasses = "py-2 px-4 rounded-md font-semibold no-underline text-center transition-colors duration-300 ease-in-out";

    return (
        <div className={cardBaseClasses}>
            <div className={`${imageContainerBaseClasses} ${imageContainerPositionClasses}`}>
                <img src={imageUrl} alt={`${name} project`} className="w-full h-auto block rounded" />
            </div>
            <div className={`${detailsContainerBaseClasses} ${detailsContainerPositionClasses}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-5">{description}</p>
                <div className="flex items-center gap-3 mt-auto">
                    {detailsUrl && (
                        <a
                            href={detailsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonBaseClasses} bg-black text-white border border-black hover:bg-gray-800`}
                        >
                            Details
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonBaseClasses} bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200`}
                        >
                            Github Repo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCardComponent;
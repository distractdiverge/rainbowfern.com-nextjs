import React from 'react';

const FooterComponent : React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white pb-10">
            <div className="p-4">
                <div className="w-auto">
                    <div className="border-gray-200 border-t p-4 flex justify-between items-center">
                        <p className="text-sm text-gray-500">&copy; {currentYear} Alex Lapinski</p>
                        <a href="https://www.linkedin.com/in/alexlapinski/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600">
                            LinkedIn
                        </a>
                        <a href="https://github.com/distractdiverge" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
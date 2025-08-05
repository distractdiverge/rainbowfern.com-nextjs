import React from 'react';
import userImage from '../../../public/AllieLooktoFront.webp';
import Image from 'next/image';

function Contact() {
  //useSeo({ 
  //  title: 'Contact | Alex Lapinski',
  //  description: 'Get in touch with Alex Lapinski to discuss potential projects, collaborations, or mentorship opportunities. Let\'s build something impactful together.' 
  //});

  const firstName = '';
  const lastName = '';
  const email = '';
  const message = '';

  const placeholderImageUrl = userImage; // Using imported image

  /*
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Contact Form Submission from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
    const fullEmail = `${emailUser}@${emailDomain}`;
    window.location.href = `mailto:${fullEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  */

  return (
    <div className="py-10 px-5 max-w-6xl mx-auto text-gray-800">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-20">
        {/* Text Content */}
        <div className="md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Let&apos;s Build Something Impactful Together.
          </p>
          <p className="text-gray-700 leading-relaxed">
          I am a seasoned software engineer and architect with 15 years of hands-on experience turning complex ideas into production systems that scale. From refactoring Swift Financial&apos;s lending platform for speed as developer #6 to steering its integration into PayPal. At PayPal I re-architected business-credit services, partnered with cybersecurity to catalog sensitive data, and launched PPP loan processing in just two weeks. I have repeatedly delivered in high-stakes, regulated domains. Along the way I&apos;ve led distributed teams, mentored engineers from intern to principal, and presented architecture deep dives to audiences of 300+.</p>
          <p className="text-gray-700 leading-relaxed mt-4">
          Today I combine that depth with a tinkerer&apos;s curiosity for emerging tech; AI/ML, cloud-native data platforms, and privacy-preserving architectures. I consult on designing resilient micro-services, accelerating DevOps workflows, and integrating real-world data securely, while championing inclusive, growth-oriented team cultures. 
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image 
            src={placeholderImageUrl.src} 
            alt="Portrait of the site author" 
            className="rounded-lg shadow-xl w-full max-w-md md:max-w-sm lg:max-w-md object-cover aspect-[4/5]" 
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact me</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={firstName}
                placeholder="Jane"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={lastName}
                placeholder="Smitherton"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              placeholder="email@janesfakedomain.net"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              value={message}
              placeholder="Enter your question or message"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

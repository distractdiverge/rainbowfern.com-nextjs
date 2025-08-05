import HeroImage from "../../public/ShadowForest.webp";

const Services = () => {
  const servicesData = [
    {
      title: "Software Engineering Consulting",
      description:
        "Helping teams with architecture, agile practices, and code reviews."
    },
    {
      title: "Software Test Automation",
      description:
        "Building robust, maintainable automated test suites for continuous integration."
    },
    {
      title: "Engineering Mentoring",
      description:
        "Guiding up-and-coming engineers and testers in best practices."
    },
  ];

  return (
    <section id="services" className="bg-white py-10">
      <div className="container mx-auto pr-4">
        <h2 className="text-1xl font-bold mb-6">What I Do</h2>
        
        <div className="max-w-[37%] float-right ml-5 mb-5 md:float-left md:mr-8 ">
            <img className="rounded-lg" src={HeroImage.src} alt="Shadow the dog" />
            <p className="text-gray-400 text-[0.67rem] pt-2">This is shadow, our resident dog and a very very good boy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="pb-6 bg-white"
            >
              <h3 className="text-sm font-semibold mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <a
            href="/contact"
            className="inline-block bg-gray-600 text-white px-6 py-3 mr-9 rounded-md hover:bg-gray-400 hover:text-gray-700 transition-colors"
          >
            Contact Me
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
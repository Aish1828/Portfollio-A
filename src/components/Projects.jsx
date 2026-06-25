const projects = [
  {
    title: "Fashion Store E-Commerce",
    image: "/ecommerce.png",
    description:
      "Modern e-commerce platform with product management and Supabase integration.",
    tech: "React • Tailwind • Supabase",
  },
  {
    title: "AI Portfolio Website",
    image: "/Screenshot (82).png",
    description:
      "Personal portfolio website with responsive design and animations.",
    tech: "React • CSS • JavaScript",
  },
  {
    title: "Medical Translator",
    image: "/Screenshot 2026-06-26 001526.png",
    description:
      "AI-powered platform that translates medical reports into simple language.",
    tech: "React • Supabase",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black text-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <p className="text-purple-500 font-medium">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Supabase",
  "Artificial Intelligence",
  "Machine Learning",
  "Cyber Security",
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-zinc-950">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-700"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Skills;
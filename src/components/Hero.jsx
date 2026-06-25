function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">

        {/* Replace with your image */}
        <img
          src="./profile.jpeg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-cyan-500 object-cover"
        />

        <h1 className="text-6xl font-bold animate-pulse">
          Hi, I'm
         <span className="text-cyan-400 drop-shadow-[0_0_15px_cyan]">
            {" "}Aishwarya
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-xl">
         Diploma Computer Engineering Student passionate about Artificial Intelligence, Machine Learning, Cyber Security, and Web Development.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
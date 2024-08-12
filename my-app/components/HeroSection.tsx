import React from 'react'

const HeroSection = () => {
  return (

    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-teal-400 to-green-500 h-[calc(100vh-80px)]">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Explore the World of Pokémon
      </h2>
      <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
        Discover various Pokémon, their stats, abilities, and more. Use the PokeDex to learn about your favorite Pokémon, or chat with our bot for quick insights.
      </p>
      <div className="flex space-x-6">
        <a
          href="pokedex"
          className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 hover:text-white transition duration-300"
        >
          Get Started
        </a>
        <a
          href="#learnmore"
          className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-teal-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );      
  
}

export default HeroSection

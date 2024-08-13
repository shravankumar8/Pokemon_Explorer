import React from 'react'

const Herosection3 = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 lg:px-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Discover the Power of PokeUnite AI Chat Bot
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Unleash the full potential of your Pokémon UNITE gameplay with our
          cutting-edge AI chat bot. Whether you `&apos;` re a seasoned trainer
          or just starting out, PokeUnite AI Chat Bot offers expert guidance and
          valuable insights to enhance your strategy and performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Pokémon Information</h2>
            <p>
              Get detailed summaries of all playable Pokémon, including their
              unique roles and abilities to help you strategize effectively.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Builds</h2>
            <p>
              Receive expert recommendations on optimal builds for your Pokémon,
              including suggested moves and emblems to maximize your
              performance.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Emblems and Effects</h2>
            <p>
              Dive into the details of various emblems, their effects, and
              discover how to utilize them to their fullest potential.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Team Compositions</h2>
            <p>
              Find balanced team compositions that cover all roles to ensure you
              have a winning strategy for every match.
            </p>
          </div>
        </div>
        <p className="text-lg mb-6 lg:text-xl mt-8">
          Feel free to ask about any specific Pokémon or topic, and let
          PokeUnite AI Chat Bot guide you to victory!
        </p>
        <a
          href="chatbot"
          className="bg-white  text-teal-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-700 hover:text-white transition duration-300"
        >
          Get Started AI
        </a>
      </div>
    </section>
  );
}

export default Herosection3

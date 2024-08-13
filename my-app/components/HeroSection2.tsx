import React from 'react'

const HeroSection2 = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          About the Pokedex
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          The Pokedex is a comprehensive Pokémon encyclopedia that provides
          detailed information about each Pokémon species, including their
          stats, abilities, and evolutions. In this application, you can search
          for Pokémon, view their stats, and explore various attributes. Whether
          you `&apos;` re a seasoned trainer or just starting your journey, our
          Pokedex offers an intuitive and engaging way to discover and learn
          more about Pokémon.
        </p>
        <div className="text-left mx-auto max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Features:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Search Functionality:</strong> Quickly find Pokémon by
              name or id.
            </li>
            <li>
              <strong>Detailed Stats:</strong> View comprehensive stats
              including HP, Attack, and Defense.
            </li>
            <li>
              <strong>Abilities Information:</strong> Learn about each Pokémon’s
              Abilities
            </li>
            <li>
              <strong>Visual Ranks:</strong> See Pokémon stats represented with
              visual progress bars.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2

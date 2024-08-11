import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface Pokemon {
  name: string;
  image: string;
  type: string;
  id: number;
}

const Pokedex = () => {
     const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises: Promise<any>[] = [];
      for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
      const results = await Promise.all(promises);
      const pokemonData: Pokemon[] = results.map((result: any) => ({
        name: result.name,
        image: result.sprites["front_default"],
        type: result.types.map((type: any) => type.type.name).join(", "),
        id: result.id,
      }));
      setPokemon(pokemonData);
    };
    fetchPokemon();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemon.filter((pokeman) =>
    pokeman.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div
      className="mx-auto w-full self-center flex justify-center"
      id="pokedex"
    >
      <div className="flex flex-col">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Pokémon"
        />

        <ul className="max-h-16 overflow-scroll">
          {searchTerm?filteredPokemon.map((pokeman: Pokemon) => (
            <li
              key={pokeman.id}
              onClick={() => {
                setSearchTerm(pokeman.name);
                
              }}
              className="cursor-pointer"
            >
              <h2 className="card-title">{pokeman.name}</h2>
            </li>
          )):""}
        </ul>
        <button
          className="text-white bg-black p-3"
          onClick={() => router.push("/pokedex/" + searchTerm)}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Pokedex;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface Pokemon {
  name: string;

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
      const pokemonData: Pokemon[] = results.map((result: any, index: any) => ({
        name: result.name,

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
    <div className="flex m-4 mx-auto w-full self-center   justify-center ">
      <div className="flex flex-col">
        <div className="flex gap-3 ">
          <div>
            <input
              className="border-0 bg-gray-400 text-black placeholder:text-black rounded-xl px-6 py-3"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search Pokémon"
            />
          </div>
          <div>
            <button
              className="text-white rounded-lg bg-black p-3"
              onClick={() => router.push("/pokedex/" + searchTerm)}
            >
              search
            </button>
          </div>
        </div>
        <div>
          <ul
            className={`max-h-25 bg-white ${
              searchTerm ? "py-4" : ""
            } px-4   min-w-64 absolute overflow-scroll`}
          >
            {searchTerm
              ? filteredPokemon.map((pokeman: Pokemon, index: any) => (
                  <li
                    key={index}
                    onClick={() => {
                      router.push("/pokedex/" + pokeman.id);
                      setSearchTerm("");
                    }}
                    className="cursor-pointer"
                  >
                    <h2 className="card-title">{pokeman.name}</h2>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

import { useState, useEffect } from "react";

const SearchDataAPI = () => {
  const [data, setData] = useState({});
  const [pokemonName, setPokemonName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        setTimeout(() => {
          setData(data);
        }, 2000);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      } finally {
        setLoading(false);
      }
    };
    if (pokemonName) {
      fetchData();
    }
  }, [pokemonName]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {data.name && (
            <div>
              <h2>{data.name}</h2>
              <img src={data.sprites.front_default} alt={data.name} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDataAPI;

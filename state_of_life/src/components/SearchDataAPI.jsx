import { useState, useEffect } from "react";

const SearchDataAPI = () => {
  const [data, setData] = useState({});
  const [pokemonName, setPokemonName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutDuration = 10000;

    fetchData(); // Inicie a chamada à API

    // Configurado timeout para cancelar a chamada se demorar muito
    timeout = setTimeout(() => {
      console.error("Tempo limite da chamada à API atingido");
      setLoading(false);
    }, timeoutDuration);

    // Limpa o timeout se o componente for desmontado antes do tempo limite expirar
    return () => {
      clearTimeout(timeout);
    };
  }, [pokemonName]);

  return (
    <div>
      <h1>Search Data API</h1>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Carregando...</div>
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

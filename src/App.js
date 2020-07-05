import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/layout/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/layout/Search';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setCharacters(result.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className='App'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;

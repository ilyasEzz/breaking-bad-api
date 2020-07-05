import React from 'react';

import CharacterItem from './CharacterItem';
import Spinner from '../layout/Spinner';

const CharacterGrid = ({ isLoading, characters }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {characters.map((character) => (
        <CharacterItem key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;

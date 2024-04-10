import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import GenreSection from '../GenreSection';

const Search = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch shows');
        }
        return response.json();
      })
      .then(data => {
        setShows(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = shows.filter(show =>
      show.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, shows]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const groupedShows = {};
  shows.forEach(show => {
    show.genres.forEach(genre => {
      if (!groupedShows[genre]) {
        groupedShows[genre] = [];
      }
      groupedShows[genre].push(show);
    });
  });

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search ..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchResults.length > 0 && (
        <GenreSection genre="Search Results" shows={searchResults} />
      )}
      {Object.keys(groupedShows).map(genre => (
        <GenreSection key={genre} genre={genre} shows={groupedShows[genre]} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-height: 80vh;
  width: 100%;
  overflow-y: scroll;
`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
`;

export default Search;

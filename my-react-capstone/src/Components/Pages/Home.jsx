
import  { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const PreviewCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 1rem;
`;

const Description = styled.p`
  margin-top: 5px;
`;

const Metadata = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const MetadataItem = styled.p`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 5px 10px;
  border-radius: 5px;
`;

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      {shows.map(show => (
        <PreviewCard key={show.id}>
          <PreviewImage src={show.image} alt={show.title} />
          <div>
            <Title>{show.title}</Title>
            <Description>{show.description}</Description>
            <Metadata>
              <MetadataItem>Seasons: {show.seasons}</MetadataItem>
              <MetadataItem>Genres: {show.genres.map(genreId => {
                switch (genreId) {
                  case 1:
                    return 'Personal Growth';
                  case 2:
                    return 'True Crime and Investigative Journalism';
                  case 3:
                    return 'History';
                  case 4:
                    return 'Comedy';
                  case 5:
                    return 'Entertainment';
                  case 6:
                    return 'Business';
                  case 7:
                    return 'Fiction';
                  case 8:
                    return 'News';
                  case 9:
                    return 'Kids and Family';
                  default:
                    return '';
                }
              }).join(', ')}</MetadataItem>
              <MetadataItem>Last Updated: {new Date(show.updated).toLocaleDateString()}</MetadataItem>
            </Metadata>
          </div>
        </PreviewCard>
      ))}
    </Container>
  );
};

export default Home;

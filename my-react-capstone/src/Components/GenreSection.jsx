import { useState } from 'react';
import styled from 'styled-components';
import PreviewCard from '../PreviewCard';

const GenreSection = ({ genre, shows }) => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [numToShow, setNumToShow] = useState(3);
  const [showAllVisible, setShowAllVisible] = useState(shows.length > numToShow);

  const handleShowClick = (showId) => {
    setSelectedShow(showId);
    setSelectedSeason(null);
    setSelectedEpisode(null);
  };

  const handleSeasonClick = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    setSelectedEpisode(null);
  };

  const handleEpisodeClick = (episodeId) => {
    setSelectedEpisode(episodeId);
  };

  const handleShowAll = () => {
    setNumToShow(shows.length);
    setShowAll(true);
    setShowAllVisible(false);
  };

  const handleShowLess = () => {
    setNumToShow(3);
    setShowAll(false);
    setShowAllVisible(true);
  };

  return (
    <Container>
      <Topic>{getTopic(genre)}</Topic>
      <ShowContainer>
        {shows.slice(0, numToShow).map(show => (
          <PreviewCard
            key={show.id}
            {...show}
            onClick={() => handleShowClick(show.id)}
          />
        ))}
      </ShowContainer>
      {showAll && selectedShow && (
        <SeasonContainer>
          {shows.find(show => show.id === selectedShow).seasons.map(season => (
            <Season key={season.number}>
              <SeasonTitle onClick={() => handleSeasonClick(season.number)}>
                Season {season.number}
              </SeasonTitle>
              {selectedSeason === season.number && (
                <EpisodeList>
                  {season.episodes.map(episode => (
                    <Episode key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
                      {episode.title}
                    </Episode>
                  ))}
                </EpisodeList>
              )}
            </Season>
          ))}
        </SeasonContainer>
      )}
      {selectedEpisode && (
        <PlayButton onClick={() => console.log('Playing episode', selectedEpisode)}>
          Play Episode
        </PlayButton>
      )}
      {showAllVisible && !showAll && (
        <ShowAllButton onClick={handleShowAll}>Show All</ShowAllButton>
      )}
      {showAll && (
        <ShowLessButton onClick={handleShowLess}>Show Less</ShowLessButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

const Topic = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ShowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ShowAllButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ShowLessButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const SeasonContainer = styled.div`
  margin-top: 20px;
`;

const Season = styled.div`
  margin-top: 10px;
`;

const SeasonTitle = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const EpisodeList = styled.div`
  margin-left: 20px;
`;

const Episode = styled.div`
  cursor: pointer;
`;

const PlayButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const getTopic = (genre) => {
  switch (genre) {
    case '1':
      return 'Personal Growth';
    case '2':
      return 'True Crime and Investigation';
    case '3':
      return 'History';
    case '4':
      return 'Comedy';
    case '5':
      return 'Entertainment';
    case '6':
      return 'Business';
    case '7':
      return 'Fiction';
    case '8':
      return 'News';
    case '9':
      return 'Kids and Family';
    default:
      return 'Other';
  }
};

export default GenreSection;

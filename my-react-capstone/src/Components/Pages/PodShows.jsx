import React, { useState } from 'react';

const PodShows = ({ show }) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState(null);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);

  const handleSeasonClick = (seasonId) => {
    setSelectedSeasonId((prevId) => (prevId === seasonId ? null : seasonId));
    setSelectedEpisodeId(null); 
  };

  const handleEpisodeClick = (episodeId) => {
    setSelectedEpisodeId((prevId) => (prevId === episodeId ? null : episodeId));
  };

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <h3>Seasons</h3>
      <ul>
        {show.seasons.map((season) => (
          <li key={season.id} onClick={() => handleSeasonClick(season.id)}>
            Season {season.number}
            {season.id === selectedSeasonId && (
              <ul>
                {season.episodes.map((episode) => (
                  <li key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
                    {episode.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {selectedEpisodeId && (
        <div>
          <h3>Selected Episode</h3>
          <p>{show.seasons.find((season) => season.id === selectedSeasonId).episodes.find((episode) => episode.id === selectedEpisodeId).title}</p>
        </div>
      )}
    </div>
  );
};

export default PodShows;

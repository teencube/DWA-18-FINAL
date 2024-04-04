/*import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShow } from '../Components/api';

function EpisodeList() {
  const { showId, seasonId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShow(showId).then((data) => setShow(data));
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const season = show.seasons.find((s) => s.id === Number(seasonId));
  if (!season) {
    return <div>Season not found</div>;
  }

  return (
    <div>
      <h1>{show.title}</h1>
      <h2>Season {season.id}</h2>
      <ul>
        {season.episodes.map((episode) => (
          <li key={episode.id}>{episode.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default EpisodeList;*/

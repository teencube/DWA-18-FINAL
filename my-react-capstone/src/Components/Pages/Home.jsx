
import  { useEffect, useState } from 'react';
import PreviewCard from '../../PreviewCard'; 

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>All SHOWS</h1>
      <div style={{ maxHeight: '80vh', overflowY: 'scroll', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '10px' }}>
          {shows.map((show, index) => (
            <PreviewCard
              key={show.id}
              id={show.id}
              title={show.title}
              image={show.image}
              description={show.description}
              seasons={show.seasons}
              genres={show.genres}
              updated={show.updated}
              style={{ flexBasis: '20%' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

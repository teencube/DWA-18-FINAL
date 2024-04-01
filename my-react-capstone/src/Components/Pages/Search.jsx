//import  { useEffect, useState } from 'react';

function Search() {
  return(
<div>
<h1>Hie</h1>
</div>

  )
}
export default Search;
/* const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        if (!response.ok) {
          throw new Error('Failed to fetch shows');
        }
        const data = await response.json();
        setShows(data.show); 
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchShows();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {shows.length > 0 ? (
            shows.map((show) => (
              <div key={show.id}>
                <h3>{show.title}</h3>
                <p>{show.image}</p>
                {show.description}
              </div>
            ))
          ) : (
            <p>No shows found</p>
          )}
        </div>
      )}
    </div>
  );
}
*/


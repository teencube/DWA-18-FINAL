// Function to fetch show data
export const getShow = async (showId) => {
  const response = await fetch(`https://podcast-api.netlify.app/id/${showId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch show');
  }
  return response.json();
};


export const getRandomShows = async () => {
  const response = await fetch('https://podcast-api.netlify.app/shows');
  if (!response.ok) {
    throw new Error('Failed to fetch random shows');
  }
  return response.json();
};



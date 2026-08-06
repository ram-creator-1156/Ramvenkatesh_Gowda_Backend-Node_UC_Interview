const axios = require('axios');

const getShowDetails = async (req, res) => {
  try {
    const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=breaking%20bad');
    const show = response.data;
    res.status(200).json({
      name: show.name,
      genres: show.genres,
      rating: show.rating,
      premiered: show.premiered
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch show details' });
  }
};

const getEpisodes = async (req, res) => {
  try {
    const showResponse = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=breaking%20bad');
    const showId = showResponse.data.id;

    const episodesResponse = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    res.status(200).json(episodesResponse.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch episodes' });
  }
};

module.exports = { getShowDetails, getEpisodes };
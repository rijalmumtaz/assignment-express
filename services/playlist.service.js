const { findSongById } = require("../models/playlist.model");

const getPlaylistSongById = (id) => {
  // Fetching data
  const playlistData = findSongById(id);
  if (playlistData == null) {
    throw {
      type: "not-found",
      message: "Cannot find user by id",
    };
  }

  // Bussiness logic
  const song = playlistData.title;

  return song;
};

module.exports = { getPlaylistSongById };

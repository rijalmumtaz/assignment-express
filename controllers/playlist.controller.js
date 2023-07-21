const {
  playlistSong,
  sortMostPlayed,
  addListener,
} = require("../models/playlist.model");

module.exports = {
  viewPlaylist: (req, res) => {
    try {
      res.send(playlistSong);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  viewMostPlayed: (req, res) => {
    try {
      res.send(sortMostPlayed());
    } catch (err) {
      res.status(400).send(err);
    }
  },
  playingMusic: (req, res) => {
    try {
      const id = req.params.id;
      addListener(id);
      res.send("playing music...");
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

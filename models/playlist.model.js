let playlistSong = [
  {
    id: "1",
    title: "wrecked my heart",
    artists: ["Loome"],
    listeners: 2000,
    url: "https://open.spotify.com/track/1pTmU2fPVrPSS6FS9dWKmz?si=4f39b88bbf2344f9",
  },
  {
    id: "2",
    title: "drunk text",
    artists: ["Henry Moodie"],
    listeners: 1000,
    url: "https://open.spotify.com/track/0KpWiHVmIFDTvai20likX4?si=934cfa8c779e4369",
  },
];

const findSongById = (id) => {
  return playlistSong.find((playlist) => playlist.id === id);
};

const addListener = (id) => {
  const song = findSongById(id);
  song.listeners += 1;
};

const sortMostPlayed = () => {
  return playlistSong.sort((a, b) => b.listeners - a.listeners);
};

module.exports = { playlistSong, findSongById, addListener, sortMostPlayed };

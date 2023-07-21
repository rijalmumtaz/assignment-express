const router = require("express").Router();
const playlistController = require("../controllers/playlist.controller");

router.get("/", playlistController.viewPlaylist);
router.get("/popular", playlistController.viewMostPlayed);
router.get("/play/:id", playlistController.playingMusic);

module.exports = router;

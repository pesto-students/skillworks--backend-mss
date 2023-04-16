const getAllArtistData = require("./queries").getAllArtistData;

router.get("/data", async (req, res) => {
  const data = await getAllArtistData("artist");
  res.json(data);
});

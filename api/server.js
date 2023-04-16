const express = require("express");
const { sequelize } = require("./models");
// const { Model } = require("sequelize");
const cors = require("cors");
const song_raga = require("./seeders/song_raga");
const app = express();
app.use(cors());
const PORT = 5678;

app.use(function (req, res, next) {
  res.cookie("cookiename", "cookievalue", {
    sameSite: "None",
    path: "/",
    maxAge: 3600,
  });
  next();
});

// to select all the artists
app.get("/getArtists", async (req, res) => {
  const getAllArtistData = async () => {
    try {
      const sql = `SELECT "id","firstName","lastName","image" FROM artists`;
      const result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });

      res.json(result);
    } catch (error) {
      throw error;
    }
  };
  await getAllArtistData();
});
//to get a list of all ragas
function convertToRGBA(value) {
  let rgbaArray = value.split(" ");
  let rgbaFormatArray = [];

  rgbaArray.forEach(function (value) {
    rgbaFormatArray.push("rgba" + toString(value));
  });
  return rgbaArray;
}
app.get("/getRagas", async (req, res) => {
  const getRagaMata = async () => {
    try {
      const sql = `SELECT "id","name","image" FROM ragas`;
      const result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });
      result.forEach((raga) => {
        raga.image = convertToRGBA(raga.image);
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  await getRagaMata();
});

app.get("/getSongs/:id", async (req, res) => {
  const getSongs = async () => {
    const id = req.params.id;
    try {
      console.log(`${id}`);
      const sql = `SELECT s.title,r.name as raga_name,s.youtube_link,r.time,r.mood,r.description,ar.bio,ar."firstName",ar."lastName"
      FROM song_ragas sr
      JOIN songs s ON sr.song_id  = s.id
      JOIN ragas r ON sr.raga_id = r.id
	  JOIN song_artists sa ON sr.song_id = sa.song_id
	  JOIN artists ar ON sa.artist_id = ar.id
      Where s.id =  ?;`;
      const result = await sequelize.query(sql, {
        replacements: [id],
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getSongs();
});
app.get("/song_id/:prahar", async (req, res) => {
  const getSongs_id = async () => {
    const prahar = req.params.prahar;
    console.log(prahar);
    try {
      const sql = `SELECT s.id 
      FROM song_ragas sr
      JOIN songs s ON sr.song_id  = s.id
      JOIN ragas r ON sr.raga_id = r.id
      WHERE UPPER(r.time) LIKE UPPER(?) `;
      const result = await sequelize.query(sql, {
        replacements: [prahar],
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getSongs_id();
});
// to select all the songs of an artist !search by name
app.get("/getSongs", async (req, res) => {
  const getSongs = async () => {
    try {
      const sql = `SELECT s.title,r.name as raga_name,s.youtube_link,r.time,r.mood
      FROM song_ragas sr
      JOIN songs s ON sr.song_id  = s.id
      JOIN ragas r ON sr.raga_id = r.id
    `;
      const result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  getSongs();
});
// get all songs with raga id
app.get("/allSongs/:id", async (req, res) => {
  const id = req.params.id;
  const getAllSongs = async () => {
    try {
      const sql = `SELECT s.title,s.id
      FROM song_ragas sr
      JOIN songs s ON sr.song_id = s.id
      JOIN ragas r ON sr.raga_id = r.id
      WHERE r.id = ?
    `;
      const result = await sequelize.query(sql, {
        replacements: [id],
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  getAllSongs(id);
});
// all songs with artist id

app.get("/allSongsByArtist/:id", async (req, res) => {
  const id = req.params.id;
  const getAllSongs = async () => {
    try {
      const sql = `SELECT s.title,s.id
      FROM song_artists sa
      JOIN songs s ON sa.song_id = s.id
      JOIN artists ar ON sa.artist_id = ar.id
      WHERE ar.id = ?;
    `;
      const result = await sequelize.query(sql, {
        replacements: [id],
        type: sequelize.QueryTypes.SELECT,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  getAllSongs(id);
});

//search api
app.get("/search/:searchString", async (req, res) => {
  const searchString = req.params.searchString;
  const Result = { songs: [], ragas: [], artist: [] };

  try {
    const searchFunctions = [
      async () => {
        const sql = `SELECT s.title, s.youtube_link,s.id
        FROM songs s
        WHERE UPPER(s.title) LIKE UPPER('%${searchString}%')`;
        const result = await sequelize.query(sql, {
          type: sequelize.QueryTypes.SELECT,
        });
        Result.songs = result;
      },
      async () => {
        const sql = `SELECT r.name, r.id
        FROM ragas r
        WHERE UPPER(r.name) LIKE UPPER('%${searchString}%')`;
        const result = await sequelize.query(sql, {
          type: sequelize.QueryTypes.SELECT,
        });
        Result.ragas = result;
      },
      async () => {
        const sql = `SELECT "firstName", a.id , "lastName"
      FROM artists a
      WHERE UPPER("firstName") LIKE UPPER('%${searchString}%')`;
        const result = await sequelize.query(sql, {
          type: sequelize.QueryTypes.SELECT,
        });
        Result.artist = result;
      },
    ];

    await Promise.all(searchFunctions.map((fn) => fn()));
    res.json(Result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Swarmandala App is listening on port ${PORT}`);
});

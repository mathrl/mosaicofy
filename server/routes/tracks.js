import express from "express";
import axios from "axios";
import cookieParser from "cookie-parser";
import colors from "colors";
//
const router = express.Router();
router.use(cookieParser());

const baseEndpoint = "https://api.spotify.com/v1";

router.get("/top/:range", async (req, res) => {
  const token = req.cookies.token;
  try {
    const topArtists = await axios.get(baseEndpoint + "/me/top/tracks", {
      headers: {
        Authorization: "Bearer " + token
      },
      params: {
        'time_range': req.params.range
      }
    });
    res.json(topArtists.data);
  } catch (err) {
    console.log(colors.bgRed(err));
  }
});

export default router;

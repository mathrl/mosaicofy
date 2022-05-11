import express from "express";
import axios from "axios";
import cookieParser from "cookie-parser";
import colors from "colors";

const router = express.Router();
router.use(cookieParser());

router.get("/", async (req, res) => {
  const token = req.cookies.token;
  try {
    const user = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(user.data);
    res.json(user.data);
  } catch (err) {
    console.log(colors.bgRed(err));
  }
});

export default router;

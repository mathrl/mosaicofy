import express from "express";
import axios from "axios";
import cors from "cors";
import qs from "qs";

import tracksRoute from "./routes/tracks.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors()).use(cookieParser());
app.use("/api/tracks", tracksRoute)
app.use("/api/user", userRoute)
const port = process.env.PORT || 3001;


const baseEndpoint = "https://api.spotify.com/v1";
const accountEndpoint = "https://accounts.spotify.com/authorize?";
const client_id = "73ed4e8a503240048ce62c2d69391564";
let redirect_uri = "http://localhost:3001/api/callback/";
let appURL = "http://localhost:8080"
const scope = "user-read-private user-top-read";
let access_token;

if(process.env.NODE_ENV == 'production') {
  app.use(express.static(__dirname + '/public/'));
  appURL = "https://hidden-wave-03827.herokuapp.com"
  redirect_uri = appURL + "/api/callback/";
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

////
let generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/////

app.get("/api/login", async (req, res) => {
  let state = generateRandomString(16);
  //let stateKey = "spotify_auth_state";
  //res.cookie(stateKey, state);
  try {
    let params = new URLSearchParams({
      client_id: client_id,
      response_type: "code",
      redirect_uri: redirect_uri,
      state: state,
      scope: scope,
    });
    console.log(accountEndpoint + params);
    res.redirect(accountEndpoint + params);
  } catch (err) {
    res.send("failed request " + err);
  }
});

app.get("/api/callback", async (req, res) => {
  console.log("cb code " + req.query.code);

  const client_secret = "708275168af04310a859f36943cea7fb";
  const code = req.query.code || null;
  //const state = req.query.state || null;

  let data = qs.stringify({
    code: code,
    redirect_uri: redirect_uri,
    grant_type: "authorization_code",
  });
  let options = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
      "content-type": "application/x-www-form-urlencoded",
    },
    data: data,
    url: "https://accounts.spotify.com/api/token",
  };

  let response;
  try {
    response = await axios(options);
  } catch (err) {
    console.log("get token err " + err);
  }

  console.log("post response " + response);

  access_token = response.data.access_token;
  console.log("access_token  " + access_token);

  // we can also pass the token to the browser to make requests from there
  //res.clearCookie();
  res.cookie("token", access_token);
  res.redirect(appURL + "/app/");
});

app.listen(port, () => console.log("server running on port " + port));

export default access_token;

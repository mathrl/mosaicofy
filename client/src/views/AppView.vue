<template>
  <div class="options">
    <label for="range">Time Frame: </label>
    <select name="range" id="range" @change="getTopTracks($event.target.value)">
      <option value="short_term">Last Month</option>
      <option value="medium_term">Last 6 Months</option>
      <option value="long_term">All Time</option>
    </select>
  </div>
  <div class="options">
    <label for="showSongs">Show Songs: </label>
    <input
      type="checkbox"
      id="showSongs"
      checked
      @change="showSongs = !showSongs"
    />
  </div>

  <button class="options" @click="download">Download Image</button>

  <div id="mosaic-container">
    <div id="mosaic">
      <div
        v-for="track in tracks"
        :key="track.id"
        class="cover"
        :style="{
          background: `url(${track.album.images[1].url}) no-repeat`,
          'background-size': 'contain',
        }"
      >
        <div v-if="showSongs" class="songInfo">
          <p id="songName">{{ track.name }}</p>

          <p id="artistName">{{ track.artists[0].name }}</p>

          <p id="duration">
            {{ millisToMinutesAndSeconds(track.duration_ms) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      tracks: [],
      time_range: "short_term",
      showSongs: true,
    };
  },

  created() {
    
    this.getUserInfo();
    this.getTopTracks(this.time_range);
  },

  methods: {
    download() {
      html2canvas(document.querySelector("#mosaic"), {
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        canvas.toBlob(function (blob) {
          saveAs(blob, "mosaicofy.png");
        });
      });
    },

    async getUserInfo() {
      try {
        const res = await axios.get("/api/user");
        this.name = res.data.display_name;
      } catch (err) {
        this.name = err;
      }
    },

    async getTopTracks(time_range) {
      this.loaded = true;
      try {
        const res = await axios.get("/api/tracks/top/" + time_range);
        this.tracks = res.data.items;
        console.log(this.tracks);
      } catch (err) {
        this.tracks = err;
      }
    },

    millisToMinutesAndSeconds(ms) {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: monospace;
  text-align: center;
}
div#mosaic-container {
  display: flex;
}
div#mosaic {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  width: auto;
  margin: 0 auto;
}
div.songInfo {
  width: 100%;
  height: 100%;
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: bold;
}
p#songName {
  font-size: 1.1rem;
}

p#artistName,
p#duration {
  font-size: 0.7rem;
}

div.cover {
  width: 170px;
  height: 170px;
}

.options {
  margin-bottom: 13px;
}

</style>

<template>
  <h1>🎧 Mosaicofy 🎧</h1>
  <div class="options">
    <label for="range">Time Frame: </label>
    <select name="range" id="range" @change="getTopTracks($event.target.value)">
      <option value="short_term" selected>Last Month</option>
      <option value="medium_term">Last 6 Months</option>
      <option value="long_term">All Time</option>
    </select>
  </div>
  <div class="options">
    <label for="size">Size: </label>
    <select id="size" @change="showTopTracksOnly = !showTopTracksOnly">
      <option value="3x5" selected>3 x 5</option>
      <option value="4x5">4 x 5</option>
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
    <div id="mosaic" :class="showTopTracksOnly ? '' : 'showAllTracks'">
      <div v-if="loading">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        v-for="track in tracksToDisplay"
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
  <about-popup></about-popup>
</template>

<script>
import axios from "axios";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      tracks: [],
      showTopTracksOnly: true, // show top 15 only
      time_range: "short_term",
      showSongs: true,
      loading: true,
    };
  },

  computed: {
    tracksToDisplay() {
      if (this.showTopTracksOnly) {
        return this.tracks.slice(0, 15);
      }
      return this.tracks;
    },
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
      this.loading = true;
      this.tracks = [];
      try {
        const res = await axios.get("/api/tracks/top/" + time_range);
        this.loading = false;
        this.tracks = res.data.items;
        // console.log(this.tracks);
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
div#mosaic-container {
  display: flex;
  margin-bottom: 15px;
}
div#mosaic {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  width: auto;
  margin: 0 auto;
}
.showAllTracks {
  grid-template-columns: repeat(4, auto) !important;
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

.options:first-child {
  margin-top: 20px;
}
.options {
  margin-bottom: 16px;
}

/* loading */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(20, 20, 20);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(20, 20, 20) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* end loading */
</style>

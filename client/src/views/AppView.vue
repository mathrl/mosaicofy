<template>
  <h1>🎧 Mosaicofy 🎧</h1>
  <div class="options">
    <div>
      <label for="range">Time Frame: </label>
      <select
        name="range"
        id="range"
        @change="getTopTracks($event.target.value)"
      >
        <option value="short_term" selected>Last Month</option>
        <option value="medium_term">Last 6 Months</option>
        <option value="long_term">All Time</option>
      </select>
    </div>
    <div>
      <label for="showInfo">Show Info: </label>
      <input
        type="checkbox"
        id="showInfo"
        checked
        @change="showInfo = !showInfo"
      />
    </div>
    <div>
      <label for="size">Size: </label>
      <select id="size" @change="mosaicFormat = $event.target.value">
        <option value="3" selected>3 x 5</option>
        <option value="4">4 x 5</option>
        <option value="5">5 x 5</option>
      </select>
    </div>
    
  </div>

  <div id="mosaic-container">
    <div id="mosaic" :style="{'grid-template-columns': `repeat(${mosaicFormat}, auto)`}">
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
      ><a :href="'https://open.spotify.com/album/' + track.album.id" target="_blank"></a>
    
      </div>

      <div v-if="!loading && showInfo" class="mosaicInfo">
        🎧 {{ name }}'s {{ timeRangeToText }} most listened from mosaicofy.com
        🎧
      </div> -->
    </div>
  </div>

  <p id="spotify-copy">Data and artwork provided by <img src="../assets/spotify.png" alt=""></p>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      tracks: [],
      mosaicFormat: "3",
      time_range: "short_term",
      showSongs: true,
      showInfo: true,
      loading: true,
    };
  },

  computed: {
    tracksToDisplay() {
      if (this.mosaicFormat == 3) {
        return this.tracks.slice(0, 15);
      }
      if (this.mosaicFormat == 4) {
        return this.tracks.slice(0, 20);
      }
      return this.tracks;
    },

    timeRangeToText() {
      if (this.time_range == "short_term") return "last month's";
      if (this.time_range == "medium_term") return "last 6 months'";
      return "all time";
    },
  },

  created() {
    this.getUserInfo();
    this.getTopTracks(this.time_range);
  },

  methods: {
    async getUserInfo() {
      try {
        const res = await axios.get("/api/user");
        this.name = res.data.display_name.split(" ")[0];
      } catch (err) {
        this.name = err;
      }
    },

    async getTopTracks(time_range) {
      this.loading = true;
      this.tracks = [];
      this.time_range = time_range;
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
p#spotify-copy {
  text-align: center;
}
p#spotify-copy img {
  height: 30px;
  vertical-align: middle;
}

div#mosaic-container {
  display: flex;
  margin-bottom: 15px;
}
div#mosaic {
  display: grid;
  justify-content: center;
  width: auto;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}
div.mosaicInfo {
  background-color: #141414f6;
  color: antiquewhite;
  grid-column-start: 1;
  grid-column-end: -1;
  text-align: center;
  padding: 4px 0;
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
  text-align: center;

  color: antiquewhite;
  font-weight: bold;
}
p#songName {
  font-size: 1.15rem;
}

p#artistName,
p#duration {
  font-size: 0.8rem;
}

div.cover {
  width: 170px;
  height: 170px;
}

div.cover a {
  display:block;
  width: 100%;
  height: 100%;
}

div.options {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
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

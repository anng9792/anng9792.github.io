const getSongBtn = document.getElementById("getSong");
const songNameEl = document.getElementById("songName");
const artistNameEl = document.getElementById("artistName");
const albumArtEl = document.getElementById("albumArt");
const previewEl = document.getElementById("preview");
const loadingEl = document.getElementById("loading");

const searchTerms = ["love", "dance", "night", "happy", "fire", "dream"]; // simple keywords to vary results

getSongBtn.addEventListener("click", () => {
  const term = searchTerms[Math.floor(Math.random() * searchTerms.length)];
  loadingEl.style.display = "block";
  albumArtEl.style.display = "none";
  previewEl.style.display = "none";
  songNameEl.textContent = "";
  artistNameEl.textContent = "";

  fetch(`https://itunes.apple.com/search?term=${term}&media=music&limit=20`)
    .then(res => res.json())
    .then(data => {
      if (data.results.length > 0) {
        const song = data.results[Math.floor(Math.random() * data.results.length)];
        songNameEl.textContent = `"${song.trackName}"`;
        artistNameEl.textContent = `by ${song.artistName}`;
        albumArtEl.src = song.artworkUrl100.replace("100x100", "300x300");
        albumArtEl.style.display = "block";

        if (song.previewUrl) {
          previewEl.src = song.previewUrl;
          previewEl.style.display = "inline-block";
        }
      } else {
        songNameEl.textContent = "No song found. Try again!";
      }
    })
    .catch(err => {
      songNameEl.textContent = "Error fetching song.";
      console.error(err);
    })
    .finally(() => {
      loadingEl.style.display = "none";
    });
});

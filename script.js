let musicPlayer = {
  musicPlaying: false,
  playBtn: document.getElementById("play"),
  coverImage: document.getElementById("cover"),
  nextBtn: document.getElementById("next"),
  previousBtn: document.getElementById("previous"),
  play: function () {
    this.playBtn.src = "/assets/pause-fill.svg";
    this.musicPlaying = true;
  },
  pause: function () {
    this.playBtn.src = "assets/music_play_play button_player_icon.svg";
    this.musicPlaying = false;
  },
  next: function () {
    musicPlayer.coverImage.src = "assets/coverImages/peter2023.jpg";
  },
  previous: function () {
    musicPlayer.coverImage.src = "assets/coverImages/Her_Loss.jpeg";
  },
};

function app() {
  if (musicPlayer.musicPlaying == false) {
    musicPlayer.play();
  } else {
    musicPlayer.pause();
  }
}

function next() {
  musicPlayer.next();
}

function previous() {
  musicPlayer.previous();
}

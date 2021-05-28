import Playlist from "./playlist.js";

const PlayInfo = ((_) => {
  const state = {
    songsLength: 0,
    isPlaying: false,
  };

  // cache the DOM
  const playerCountEl = document.querySelector(".player__count");
  const playerTrigerEl = document.querySelector(".player__trigger");

  const init = (_) => {
    render();
    listeners();
  };

  const listeners = (_) => {
    playerTrigerEl.addEventListener("click", (_) => {
      // 1. change our own (Playinfo's) state
      state.isPlaying = state.isPlaying ? false : true;
      // 2. render it
      render();
      // 3. toggle the playpause song functionality
      Playlist.flip();
    });
  };

  const setState = (obj) => {
    state.songsLength = obj.songsLength;
    state.isPlaying = obj.isPlaying;
    render();
  };

  const render = (_) => {
    playerCountEl.innerHTML = state.songsLength;
    playerTrigerEl.innerHTML = state.isPlaying ? "Pause" : "Play";
  };

  return {
    init,
    setState,
  };
})();

export default PlayInfo;

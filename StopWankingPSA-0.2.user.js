// ==UserScript==
// @name         Stop Wanking PSA
// @namespace    http://tampermonkey.net/
// @description  based on this r/okmatewanker post https://shorturl.at/fcA13
// @version      0.2
// @match        *://*.pornhub.com/*
// @match        *://pornhub.com/*
// @match        *://*.redtube.com/*
// @match        *://*.xvideos.com/*
// @match        *://pornhub.com/*
// @match        *://www.pornhub.com/*
// @match        *://*.pornhub.com/*
// @match        *://redtube.com/*
// @match        *://www.redtube.com/*
// @match        *://*.redtube.com/*
// @match        *://xvideos.com/*
// @match        *://www.xvideos.com/*
// @match        *://*.xvideos.com/*
// @match        *://youporn.com/*
// @match        *://www.youporn.com/*
// @match        *://*.youporn.com/*
// @match        *://spankwire.com/*
// @match        *://www.spankwire.com/*
// @match        *://*.spankwire.com/*
// @match        *://xnxx.com/*
// @match        *://www.xnxx.com/*
// @match        *://*.xnxx.com/*
// @match        *://brazzers.com/*
// @match        *://www.brazzers.com/*
// @match        *://*.brazzers.com/*
// @match        *://tube8.com/*
// @match        *://www.tube8.com/*
// @match        *://*.tube8.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
  // Block all writes to the page so it doesn’t load normally
  document.write = () => {};
  document.writeln = () => {};

  // Clear The Shit ASAP
  try {
    document.documentElement.innerHTML = '';
  } catch (e) {
    // Some browsers might error here.
  }

  // Waiting...
  window.addEventListener('DOMContentLoaded', () => {
    // Remove any residual content
    document.body.innerHTML = '';

    // The Video PSA (don't touch it, i mean, you can modify the vid src but don't you dare touch it.)
    const vid = document.createElement('video');
    vid.src = 'https://packaged-media.redd.it/6bnuclbimhff1/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1753675200&s=a157877703763bce1ad1ba7d39fe1783450a9fea';
    vid.autoplay = true;
    vid.controls = false;
    vid.muted = true; // Muted to avoid autoplay block by browser
    vid.style = `
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      object-fit: cover;
      z-index: 999999;
      background: black;
    `;

    vid.onended = () => {
      window.location.reload();
    };

    document.body.appendChild(vid);
  });
})();

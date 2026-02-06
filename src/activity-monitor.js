// ==UserScript==
// @name         YouTube Immersive Interaction
// @version      1.0
// @description  Detects mouse move & keys to toggle masthead visibility
// ==/UserScript==

(function () {
  "use strict";

  let activityTimeout;
  const body = document.body;
  const ACTIVE_CLASS = "user-active";
  const HIDE_DELAY = 3000;

  function resetActivity() {
    if (!body.classList.contains(ACTIVE_CLASS)) {
      body.classList.add(ACTIVE_CLASS);
    }

    clearTimeout(activityTimeout);

    activityTimeout = setTimeout(() => {
      body.classList.remove(ACTIVE_CLASS);
    }, HIDE_DELAY);
  }

  // Ouve movimento do mouse e teclas
  window.addEventListener("mousemove", resetActivity);
  window.addEventListener("keydown", resetActivity);

  // Inicia ativo
  resetActivity();
})();

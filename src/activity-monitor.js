// ==UserScript==
// @name         YouTube Immersive Interaction & Layout Fixer
// @version      1.1
// @description  Detects activity AND fixes cold-start layout bugs
// ==/UserScript==

(function () {
  "use strict";

  /* --- PART 1: ACTIVITY MONITOR --- */
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

  window.addEventListener("mousemove", resetActivity);
  window.addEventListener("keydown", resetActivity);
  window.addEventListener("click", resetActivity);
  resetActivity();

  /* --- PART 2: COLD START FIXER (Mutation Observer) --- */

  function forceResize() {
    window.dispatchEvent(new Event("resize"));
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const target = mutation.target;
        if (target.tagName === "VIDEO" || target.id === "movie_player") {
          if (!target.dataset.fixed) {
            forceResize();
            target.dataset.fixed = "true";
            setTimeout(() => (target.dataset.fixed = ""), 1000);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"],
  });

  window.addEventListener("load", () => {
    let attempts = 0;
    const interval = setInterval(() => {
      forceResize();
      attempts++;
      if (attempts > 5) clearInterval(interval);
    }, 500);
  });

  // Garante correção na navegação SPA também
  document.addEventListener("yt-navigate-finish", forceResize);
})();

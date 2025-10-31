"use strict";

import { blogs } from "../data/blogs.js";
import { socialButtons } from "../data/social-buttons.js";
document.documentElement.dataset.theme = "dark";

// Blogs List
const blogContainer = document.getElementById("blogs-list");

if (blogContainer) {
  blogs.forEach((blogItem) => {
    const card = document.createElement("external-card-link");
    card.url = blogItem.url;
    card.title = blogItem.title;

    blogContainer.appendChild(card);
  });
}

// Footer Social Buttons
const socialButtonsList = document.querySelector(
  ".footer-section .social-buttons-list"
);
if (socialButtonsList) {
  socialButtonsList.style.display = "flex";
  socialButtonsList.style.flexWrap = "wrap";
  socialButtons.forEach((socialButton) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = socialButton.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = socialButton.title;
    a.className = "underline underline-offset-4 hover:text-emerald-500";
    li.appendChild(a);
    socialButtonsList.appendChild(li);
  });
}

// Current Year
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = currentYear;

// Experimenting with frog animation - demo
let activeFrogs = 0;
const MAX_FROGS = 20;
const ANIMATION_DURATION = 4000;

// Create broadcast channel for cross-window communication
const frogChannel = new BroadcastChannel("frog-channel");

// Generate unique window ID
const windowId = `window-${Date.now()}-${Math.random()}`;
const joinedAt = Date.now();

// Track all active windows with their join order
let windowRegistry = [{ id: windowId, joinedAt: joinedAt }];

// Track all active frogs across all windows with their progress
let globalFrogState = new Map();

// Helper function to update registry and keep it sorted
function updateWindowRegistry(id, timestamp) {
  const existingIndex = windowRegistry.findIndex((w) => w.id === id);

  if (existingIndex === -1) {
    windowRegistry.push({ id, joinedAt: timestamp });
  } else {
    windowRegistry[existingIndex].joinedAt = timestamp;
  }

  windowRegistry.sort((a, b) => a.joinedAt - b.joinedAt);

  updateButtonVisibility();
}

// Check if this window is the master (first/oldest window)
function isMasterWindow() {
  return windowRegistry.length > 0 && windowRegistry[0].id === windowId;
}

// Show/hide button based on master status
function updateButtonVisibility() {
  const triggerButton = document.querySelector(".lottie-trigger-button");

  if (triggerButton) {
    if (isMasterWindow()) {
      triggerButton.style.display = "block";
      triggerButton.style.opacity = "1";
      triggerButton.style.pointerEvents = "auto";
    } else {
      triggerButton.style.display = "none";
      triggerButton.style.opacity = "0";
      triggerButton.style.pointerEvents = "none";
    }
  }
}

// Announce this window's presence
setTimeout(() => {
  frogChannel.postMessage({
    type: "WINDOW_JOINED",
    windowId: windowId,
    joinedAt: joinedAt,
  });

  // Request current frog state from master window
  frogChannel.postMessage({
    type: "REQUEST_FROG_STATE",
    windowId: windowId,
  });

  updateButtonVisibility();
}, 100);

// Listen for messages from other windows
frogChannel.onmessage = (event) => {
  const {
    type,
    windowId: senderWindowId,
    frogId,
    currentWindowIndex,
    joinedAt: senderJoinedAt,
    frogState,
    startTime,
  } = event.data;

  switch (type) {
    case "WINDOW_JOINED":
      updateWindowRegistry(senderWindowId, senderJoinedAt);

      frogChannel.postMessage({
        type: "WINDOW_PRESENT",
        windowId: windowId,
        joinedAt: joinedAt,
      });
      break;

    case "WINDOW_PRESENT":
      updateWindowRegistry(senderWindowId, senderJoinedAt);
      break;

    case "WINDOW_LEFT":
      windowRegistry = windowRegistry.filter((w) => w.id !== senderWindowId);
      updateButtonVisibility();
      break;

    case "REQUEST_FROG_STATE":
      if (isMasterWindow() && globalFrogState.size > 0) {
        const stateArray = Array.from(globalFrogState.entries()).map(
          ([id, state]) => ({
            frogId: id,
            ...state,
          })
        );

        frogChannel.postMessage({
          type: "FROG_STATE_SYNC",
          frogState: stateArray,
          targetWindowId: senderWindowId,
        });
      }
      break;

    case "FROG_STATE_SYNC":
      if (event.data.targetWindowId === windowId && frogState) {
        frogState.forEach((state) => {
          const myWindowIndex = windowRegistry.findIndex(
            (w) => w.id === windowId
          );

          if (state.currentWindowIndex === myWindowIndex) {
            const elapsedTime = Date.now() - state.startTime;
            const timeInCurrentWindow =
              elapsedTime - state.currentWindowIndex * ANIMATION_DURATION;

            if (
              timeInCurrentWindow > 0 &&
              timeInCurrentWindow < ANIMATION_DURATION
            ) {
              spawnFrogInWindow(
                state.frogId,
                myWindowIndex,
                timeInCurrentWindow
              );
            }
          }
        });
      }
      break;

    case "FROG_ENTER":
      const myWindowIndex = windowRegistry.findIndex((w) => w.id === windowId);

      if (myWindowIndex === currentWindowIndex) {
        spawnFrogInWindow(frogId, myWindowIndex, 0, startTime);
      }
      break;
  }
};

// Announce when window is closing
window.addEventListener("beforeunload", () => {
  frogChannel.postMessage({
    type: "WINDOW_LEFT",
    windowId: windowId,
  });
});

// Store active frogs
const activeFrogElements = new Map();

function spawnFrogInWindow(
  frogId,
  windowIndex,
  startDelay = 0,
  existingStartTime = null
) {
  if (activeFrogElements.has(frogId)) {
    return;
  }

  if (activeFrogs >= MAX_FROGS) {
    return;
  }

  activeFrogs++;

  const frogContainer = document.getElementById("frog-container");

  const frogWrapper = document.createElement("div");
  frogWrapper.className = "frog-instance";
  frogWrapper.dataset.frogId = frogId;

  const lottie = document.createElement("dotlottie-wc");
  lottie.setAttribute(
    "src",
    "https://lottie.host/3f6c74ee-69d5-4129-9cc7-fc2a0f2052e0/hjkqHzykYT.lottie"
  );
  lottie.setAttribute("speed", "1");
  lottie.setAttribute("mode", "forward");
  lottie.setAttribute("loop", "");
  lottie.setAttribute("autoplay", "");
  lottie.style.width = "150px";
  lottie.style.height = "150px";

  frogWrapper.appendChild(lottie);
  frogContainer.appendChild(frogWrapper);

  activeFrogElements.set(frogId, frogWrapper);

  // Track this frog's state
  const startTime = existingStartTime || Date.now();
  globalFrogState.set(frogId, {
    currentWindowIndex: windowIndex,
    startTime: startTime,
  });

  // If joining mid-animation, adjust the starting position
  if (startDelay > 0) {
    const totalDistance = window.innerWidth + 150;
    const progress = startDelay / ANIMATION_DURATION;
    const currentPosition = -150 + totalDistance * progress;

    frogWrapper.style.right = `${-currentPosition}px`;
    frogWrapper.style.transition = `right ${
      ANIMATION_DURATION - startDelay
    }ms linear`;
  }

  setTimeout(() => {
    frogWrapper.classList.add("moving");
  }, 50);

  const remainingTime = ANIMATION_DURATION - startDelay;

  setTimeout(() => {
    frogWrapper.remove();
    activeFrogElements.delete(frogId);
    activeFrogs--;

    const nextWindowIndex = windowIndex + 1;

    if (nextWindowIndex < windowRegistry.length) {
      frogChannel.postMessage({
        type: "FROG_ENTER",
        frogId: frogId,
        currentWindowIndex: nextWindowIndex,
        startTime: startTime,
      });
    } else {
      globalFrogState.delete(frogId);
    }
  }, remainingTime + 100);
}

function createFrog() {
  if (!isMasterWindow()) {
    return;
  }

  if (activeFrogs >= MAX_FROGS) {
    return;
  }

  const frogId = `frog-${Date.now()}-${Math.random()}`;
  const myWindowIndex = windowRegistry.findIndex((w) => w.id === windowId);

  spawnFrogInWindow(frogId, myWindowIndex);
}

// Add click event to button
window.addEventListener("DOMContentLoaded", () => {
  const triggerButton = document.querySelector(".lottie-trigger-button");

  if (triggerButton) {
    triggerButton.addEventListener("click", () => {
      createFrog();
    });
  }

  updateButtonVisibility();
});

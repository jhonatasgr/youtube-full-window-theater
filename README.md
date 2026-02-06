# YouTube Full-Window Theater 🎬

A lightweight browser extension that transforms YouTube's Theater Mode into a true **Full-Window Experience**, similar to Twitch or Kick.

## ✨ Features

- **Full Window Video:** The video player takes up 100% of the viewport width and height in Theater Mode.
- **Smart Chat Layout:** Chat is pushed below the video (no overlap), utilizing standard CSS flow.
- **Auto-Hide Masthead:** The top search bar slides away to maximize immersion and reappears when you move your mouse.
- **Live Stream Support:** Correctly handles "Squeezeback" mode, preventing squashed videos during Livestreams.
- **Pure CSS & JS:** High performance, no heavy frameworks.

## 🚀 How to Install (Developer Mode)

1. Download or Clone this repository.
2. Open your browser extensions page:
   - Chrome/Edge/Brave: `chrome://extensions`
   - Firefox: `about:debugging`
3. Enable **Developer Mode** (usually a toggle in the top right).
4. Click **Load Unpacked** and select this folder.
5. Go to YouTube and click the Theater Mode button (or press `t`).

## 🛠️ Tech Stack

- Manifest V3
- CSS3 (Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (MutationObservers, Event Listeners)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

# 🚫 Bye YT Shorts – YouTube Shorts Blocker

Reclaim your focus. Remove YouTube’s most addictive feature.

---

## 🧠 The Philosophy: Escaping the Brain Rot
YouTube Shorts is engineered to hijack your attention using a **variable ratio reinforcement schedule**—the same psychological trick behind slot machines.

- Endless scroll
- Rapid context switching
- Precision-tuned micro-dopamine hits

You open YouTube with a purpose. Suddenly, 45 minutes vanish into a blur of 15-second clips.

This is not a willpower problem.

It’s an environment problem.

**This extension removes Shorts entirely so your brain never gets the chance to fall into the loop.**

---

## 🚀 Features
- **Remove Shorts Shelves** from the YouTube homepage.
- **Clean Search Results** by hiding embedded Shorts.
- **Navigation Sidebar Cleanup** to remove the Shorts button entirely.
- **No Empty Gaps** – intelligent layout collapsing after removing elements.
- **Toggle Enable/Disable** from the extension popup.

---

## 🛠️ How It Works: The Smart Grid Cleaner

YouTube is built as a complex Single Page Application (SPA). Other blockers often break the layout by blindly deleting Shorts components from the DOM, leading to "Grid Gaps" or "Holes."

This extension prevents layout corruption by implementing a Non-Destructive Hiding Strategy combined with smart cleanup logic:

The "Void Fix" (Grid Integrity)

Non-Destructive Hiding: We use the CSS property display: none instead of physically deleting (.remove()) the element. This satisfies YouTube's internal rendering engine, preventing application crashes or miscalculations.

Item Hiding & Shelf Targeting: We aggressively target video cards with links pointing to /shorts and remove the entire dedicated Shorts shelves (ytd-rich-section-renderer) to declutter the homepage.

Row Consolidation: If a video row (ytd-rich-grid-row) contains only hidden Shorts, the extension automatically detects this and hides the entire row, collapsing the gap and maintaining a clean, continuous grid of standard videos.

---

## 📦 Installation (Developer Mode)
1. Clone this repository.
2. Open Chrome and visit `chrome://extensions`.
3. Enable **Developer Mode** (top right corner).
4. Click **Load Unpacked**.
5. Select the folder that contains `manifest.json`.

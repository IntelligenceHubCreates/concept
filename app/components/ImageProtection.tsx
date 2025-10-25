"use client";

import { useEffect } from "react";

// Extend HTMLImageElement to safely include _longPressTimeout
interface ProtectedImage extends HTMLImageElement {
  _longPressTimeout?: ReturnType<typeof setTimeout>;
}

export default function ImageProtection() {
  useEffect(() => {
    // Disable right-click (desktop)
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Disable drag
    const disableDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", disableDrag);

    // Disable shortcut keys
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "u", "p", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    // Disable long press only for images (mobile)
    const images = document.querySelectorAll("img") as NodeListOf<ProtectedImage>;
    images.forEach((img) => {
      img.addEventListener("contextmenu", (e) => e.preventDefault());
      img.addEventListener("touchstart", () => {
        const timeout = setTimeout(() => {
          alert("Image protection: saving disabled 🔒");
        }, 700); // Trigger alert if long-pressed >700ms
        img._longPressTimeout = timeout;
      });
      img.addEventListener("touchend", () => {
        if (img._longPressTimeout) clearTimeout(img._longPressTimeout);
      });
    });

    // Apply protection CSS
    const style = document.createElement("style");
    style.innerHTML = `
      img {
        -webkit-touch-callout: none; /* Disable long press save */
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: auto; /* ✅ Allow clicks/taps */
        position: relative;
      }

      img::after {
        content: "© Concept Doors & Windows";
        position: absolute;
        bottom: 6%;
        right: 6%;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        font-weight: 500;
        text-shadow: 0 0 4px rgba(0,0,0,0.6);
        pointer-events: none;
      }

      span[style*="position: relative"]::after {
        content: "© Concept Doors & Windows";
        position: absolute;
        bottom: 6%;
        right: 6%;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        font-weight: 500;
        text-shadow: 0 0 4px rgba(0,0,0,0.6);
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeys);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

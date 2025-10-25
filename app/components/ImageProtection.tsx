"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    // Disable right-click
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Disable drag
    const disableDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", disableDrag);

    // Disable key shortcuts (desktop)
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "u", "p", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    // 🔒 Disable long-press on mobile
    const disableLongPress = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.addEventListener("touchstart", disableLongPress, { passive: false });
    document.addEventListener("touchend", disableLongPress, { passive: false });
    document.addEventListener("touchmove", disableLongPress, { passive: false });

    // Apply CSS to all images dynamically
    const style = document.createElement("style");
    style.innerHTML = `
      img {
        -webkit-touch-callout: none; /* Disable long press save on Safari */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: auto; /* disable tap interaction */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeys);
      document.removeEventListener("touchstart", disableLongPress);
      document.removeEventListener("touchend", disableLongPress);
      document.removeEventListener("touchmove", disableLongPress);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

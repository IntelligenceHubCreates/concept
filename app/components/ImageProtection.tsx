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

    // Disable long press on mobile
    const disableLongPress = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchstart", disableLongPress, { passive: false });
    document.addEventListener("touchend", disableLongPress, { passive: false });
    document.addEventListener("touchmove", disableLongPress, { passive: false });

    // Apply image protection CSS + watermark
    const style = document.createElement("style");
    style.innerHTML = `
      img {
        -webkit-touch-callout: none; /* Disable long press on Safari */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
        position: relative;
      }

      /* 🔒 Watermark overlay */
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

      /* For Next.js <Image> wrapper containers */
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
      document.removeEventListener("touchstart", disableLongPress);
      document.removeEventListener("touchend", disableLongPress);
      document.removeEventListener("touchmove", disableLongPress);
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

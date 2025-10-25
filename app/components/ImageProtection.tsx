"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    // 🔒 Disable right-click
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // 🔒 Disable drag-and-drop for images
    const disableDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", disableDrag);

    // 🔒 Block developer shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ["s", "u", "p", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return null;
}

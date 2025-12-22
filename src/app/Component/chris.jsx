import React from 'react'
// ...existing code...
import { useEffect, useState, useRef } from "react";

export default function Christmas() {
  const [name, setName] = useState("");
+  const [isPlaying, setIsPlaying] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [timeLeft, setTimeLeft] = useState({});
  const [isChristmas, setIsChristmas] = useState(false);

  // 🔊 Audio ref
  const audioRef = useRef(null);

+  useEffect(() => {
+    const audio = audioRef.current;
+    if (!audio) return;
+    const onEnded = () => setIsPlaying(false);
+    audio.addEventListener("ended", onEnded);
+    return () => audio.removeEventListener("ended", onEnded);
+  }, []);
...
        {/* 🔊 AUDIO ELEMENT (hidden) */}
-        <audio ref={audioRef} src="merry.mp3" preload="auto" />
+        <div className="mt-2">
+          <a
+            href="#"
+            onClick={(e) => {
+              e.preventDefault();
+              const audio = audioRef.current;
+              if (!audio) return;
+              if (audio.paused) {
+                audio.play().then(() => setIsPlaying(true)).catch(() => console.warn("play blocked"));
+              } else {
+                audio.pause();
+                setIsPlaying(false);
+              }
+            }}
+            className="text-white underline"
+          >
+            {isPlaying ? "Pause Music" : "Play Music"}
+          </a>
+          <audio ref={audioRef} src="/merry.mp3" preload="auto" controls={false} />
+          {/* change src to match where you put the file in public/, e.g. /merry.mp3 or /audio/merry.mp3 */}
+        </div>
// ...existing code...
export default function chris() {
  return (
    <div>
      
    </div>
  )
}

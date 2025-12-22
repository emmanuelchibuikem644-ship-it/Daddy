"use client";
import { useEffect, useState, useRef } from "react";

export default function Christmas() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [timeLeft, setTimeLeft] = useState({});
  const [isChristmas, setIsChristmas] = useState(false);

  const audioRef = useRef(null);

  // 🎄 Countdown 
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const year =
        now.getMonth() === 11 && now.getDate() > 25
          ? now.getFullYear() + 1
          : now.getFullYear();

      const christmas = new Date(year, 11, 25, 0, 0, 0);
      const diff = christmas - now;

      if (diff <= 0) {
        setIsChristmas(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🎵 AUTOPLAY + LOOP
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.6;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    // Desktop
    playAudio();

    // Mobile (first tap anywhere)
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("touchstart", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  const handleSubmit = () => {
    if (!name.trim()) return alert("Please enter your name");
    setDisplayName(name);
    setName("");
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-white flex justify-center px-4 py-6">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/voild.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="w-full max-w-3xl text-center space-y-6 relative z-10">
        <h1 className="text-lg font-bold text-green-600">
          {displayName || ""}
        </h1>

        <h2 className="text-3xl font-extrabold text-red-600">
          {isChristmas ? " Emmanuel kaneh is whishing you 🎄 Merry Christmas 🎄" : "🎅 Emmanuel kaneh is Wishing You merry christmas In Advance"}
        </h2>

        {!isChristmas && (
          <p className="text-green-200">
            {timeLeft.days ?? 0} Days, {timeLeft.hours ?? 0} Hrs,{" "}
            {timeLeft.minutes ?? 0} Min, {timeLeft.seconds ?? 0} Sec
          </p>
        )}

        <div className="flex justify-center gap-4">
          <img src="/slide3.gif" className="h-40 w-40 rounded-md" />
          <img src="/santa11.gif" className="h-40 w-40 rounded-md" />
        </div>

        {/* 🔊 SINGLE AUDIO ELEMENT */}
        <audio ref={audioRef} src="/merry.mp3" preload="auto" />

        <div className="border-2 border-dashed border-green-500 p-4 rounded-lg bg-white/60">
          <p className="text-green-700 text-lg">🎄 May you receive all that  come true</p>
          <p className="text-red-700 text-lg">you desire and dream come true</p>
          <p className="text-blue-700 text-lg" >may this christmas bring you</p>
          <p className="text-purple-700 text-lg">joy peace and all you need in life</p>
          <p className="text-red-600 mt-2">🎁 Merry Christmas 🎁</p>
        </div>

        <div className="h-24" />
      </div>

     {/* INPUT */} <div className="fixed bottom-0 left-0 w-full p-3 z-40"> <div className="max-w-3xl mx-auto flex gap-2"> <input value={name} onChange={(e) => setName(e.target.value)} placeholder="👉 Enter Your Name" className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg outline-none" />
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
}

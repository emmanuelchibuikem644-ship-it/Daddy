 // ...existing code...
"use client"
import { useEffect, useState } from "react";

export default function Christmas() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [timeLeft, setTimeLeft] = useState({});
  const [isChristmas, setIsChristmas] = useState(false);

  // 🎄 Christmas Countdown Logic
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

  // 👇 Handle Name Submit
  const handleSubmit = () => {
    if (!name.trim()) return alert("Please enter your name ");
    alert(`Welcome ${name}! 🎄`);
    setDisplayName(name);
    setName("");
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center px-4 py-6">
      <div className="w-full max-w-3xl text-center space-y-6">
        {/* NAME DISPLAY */}
        <h1 className="text-lg sm:text-xl font-bold text-green-600">
          {displayName
            ? `${displayName}, ${
                isChristmas ? "Merry Christmas 🎄" : "Wishing You In Advance 🎅"
              }`
            : "EMMANUEL KANEH"}
        </h1>

        {/* STATUS TEXT */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600">
          {isChristmas ? "🎄 Merry Christmas 🎄" : "Wishing You In Advance"}
        </h2>

        {/* COUNTDOWN */}
        {!isChristmas && (
          <p className="text-sm text-green-700 font-semibold">
            {timeLeft.days ?? 0} Days, {timeLeft.hours ?? 0} Hrs, {timeLeft.minutes ?? 0} Min,{" "}
            {timeLeft.seconds ?? 0} Sec
          </p>
        )}

        {/* IMAGE SECTION - stacked on mobile, row on tablet+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src="/slide3.gif"
            alt="christmas slide"
            className="object-cover h-40 w-40 sm:h-56 sm:w-56 rounded-md"
            loading="lazy"
          />
          <img
            src="/santa11.gif"
            alt="santa"
            className="object-cover h-40 w-40 sm:h-56 sm:w-56 rounded-md"
            loading="lazy"
          />
        </div>

        {/* MESSAGE BOX */}
        <div className="border-2 border-dashed border-green-500 p-4 rounded-lg text-sm font-semibold text-left sm:text-center">
          <p className="text-green-400 text-lg">🎄 May you receive all that </p> 
          <p className="text-orange-400 text-lg">you desire and dream for.</p>
          <p className="text-blue-700 text-lg">🎅 May this Christmas bring you </p>
           <p  className="text-purple-800 text-lg"> all that you need in life.</p>
          <p className="text-red-600 mt-2">🎁 Merry Christmas 🎁</p>
        </div>

        {/* mobile spacer so content isn't hidden behind fixed input */}
        <div className="h-24 sm:hidden" />
      </div>

      {/* INPUT AREA: fixed on small screens, static on larger screens */}
      <div className="fixed bottom-0 left-0 w-full sm:static sm:w-auto bg-white p-3 border-t sm:border-t-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center gap-2 px-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="👉 Enter Your Name Here..."
            aria-label="Enter your name"
            className="flex-1 bg-red-600 text-white placeholder-white px-4 py-3 rounded-lg outline-none"
          />
          <button
            onClick={handleSubmit}
            aria-label="Submit name"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            👉 GO
          </button>
        </div>
      </div>
    </div>
  );
}
// ...existing code...
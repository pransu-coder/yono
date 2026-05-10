import React, { useState } from "react";
import {
  Gift,
  Flame,
  Rocket,
  Gamepad2,
  Download,
  Star,
} from "lucide-react";
import { DotLottiePlayer } from "@dotlottie/react-player";

const Games = () => {
  const [activeTab, setActiveTab] = useState("new");

  const games = [
    {
      id: 1,
      title: "YonoGames",
      image:
        "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
      tag: "NEW",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 2,
      title: "Yono777",
      image:
        "https://img.freepik.com/premium-vector/casino-slot-machine-jackpot-logo_18099-431.jpg",
      tag: "NEW",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 3,
      title: "Spin777",
      image:
        "https://img.freepik.com/premium-vector/casino-slot-machine-logo_18099-448.jpg",
      tag: "HOT",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 4,
      title: "789Jackpots",
      image:
        "https://img.freepik.com/premium-vector/casino-jackpot-logo_18099-440.jpg",
      tag: "HOT",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 5,
      title: "MahaGames",
      image:
        "https://img.freepik.com/premium-vector/casino-slot-logo_18099-435.jpg",
      tag: "HOT",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 6,
      title: "Yono Arcade",
      image:
        "https://img.freepik.com/premium-vector/casino-slot-machine-logo_18099-432.jpg",
      tag: "NEW",
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <div className="relative text-white">

      <div className="relative z-10 max-w-[1600px] mx-auto px-3 md:px-6 pt-5 pb-0">

        {/* CATEGORY BAR - Fixed for small screens with Shimmer */}
        <div className="w-full overflow-x-auto no-scrollbar mb-7 pb-2">
          <div className="flex items-center justify-start md:justify-center gap-2 min-w-max px-2">
            <div className="bg-[#1b5f4c]/60 border border-green-400/20 rounded-full p-1 flex items-center gap-2 md:gap-6 backdrop-blur-md shadow-lg relative overflow-hidden">
              
              {/* Shimmer Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer-fast"></div>
              </div>

              <button
                onClick={() => setActiveTab("new")}
                className={`min-w-[60px] md:min-w-[160px] h-9 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === "new"
                    ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-105"
                    : "bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Gift className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === "new" ? "text-green-900" : "text-cyan-100"}`} />
              </button>

              <button 
                onClick={() => setActiveTab("games")}
                className={`min-w-[60px] md:min-w-[160px] h-9 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === "games"
                    ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-105"
                    : "bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Gamepad2 className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === "games" ? "text-green-900" : "text-cyan-100"}`} />
              </button>

              <button 
                onClick={() => setActiveTab("star")}
                className={`min-w-[60px] md:min-w-[160px] h-9 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === "star"
                    ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-105"
                    : "bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Star className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === "star" ? "text-green-900" : "text-cyan-100"}`} />
              </button>

              <button 
                onClick={() => setActiveTab("hot")}
                className={`min-w-[60px] md:min-w-[160px] h-9 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === "hot"
                    ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-105"
                    : "bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Flame className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === "hot" ? "text-green-900" : "text-cyan-100"}`} />
              </button>

              <button 
                onClick={() => setActiveTab("rocket")}
                className={`min-w-[60px] md:min-w-[160px] h-9 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === "rocket"
                    ? "bg-gradient-to-b from-green-300 to-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] scale-105"
                    : "bg-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Rocket className={`w-4 h-4 md:w-5 md:h-5 ${activeTab === "rocket" ? "text-green-900" : "text-cyan-100"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-4 gap-6">

          {games.map((game) => (
            <div
              key={game.id}
              className="group relative rounded-[28px] border border-white/15 bg-[rgba(8,45,20,0.45)] backdrop-blur-md p-5 shadow-[0_0_20px_rgba(0,255,120,0.08)]"
            >

              {/* GOLDEN SHIMMER */}
              <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                <div className="absolute top-0 -left-[120%] w-[80%] h-full bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-[1800ms]"></div>
              </div>

              {/* GOLD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.14),transparent_35%)] rounded-[28px]"></div>

              {/* HOT / NEW */}
              <div className="absolute -top-1 -left-1 z-30 pointer-events-none">
                {game.tag === "NEW" ? (
                  <div className="w-12 h-12">
                    <DotLottiePlayer
                      src="/New Product.json"
                      autoplay
                      loop
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12">
                    <DotLottiePlayer
                      src="/Hot Deals Corner Label.json"
                      autoplay
                      loop
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex gap-4">

                  <div className="w-[74px] h-[74px] rounded-2xl overflow-hidden bg-white/10 border border-white/20">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-2">
                      
                      <h2 className="text-[20px] font-bold">
                        {game.title}
                      </h2>

                      <div className="flex items-center gap-1 text-yellow-400 text-[18px] font-bold">
                        ★ 4.8
                      </div>
                    </div>

                    <p className="text-green-300 text-[15px] mt-2">
                      🎁 ₹40 - ₹70
                    </p>

                    <p className="text-green-400 text-[14px] mt-1">
                      💲 Min ₹100 Withdrawal
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button className="mt-6 w-full h-[52px] rounded-2xl bg-gradient-to-r from-[#4b5b7d] to-[#40506d] hover:scale-[1.02] transition text-[22px] font-bold shadow-[0_0_18px_rgba(255,215,0,0.15)]">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="grid grid-cols-3 gap-3 lg:hidden">

          {games.map((game) => (
            <div
              key={game.id}
              className="group relative rounded-[22px] border border-green-400/20 bg-[rgba(5,35,18,0.55)] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,120,0.08)]"
            >

              {/* GOLDEN SHIMMER */}
              <div className="absolute inset-0 overflow-hidden z-10 rounded-[22px]">
                <div className="absolute top-0 -left-[120%] w-[80%] h-full bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-[1800ms]"></div>
              </div>

              {/* HOT / NEW */}
              <div className="absolute -top-1 -left-1 z-30 pointer-events-none">
                {game.tag === "NEW" ? (
                  <div className="w-12 h-12">
                    <DotLottiePlayer
                      src="/New Product.json"
                      autoplay
                      loop
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12">
                    <DotLottiePlayer
                      src="/Hot Deals Corner Label.json"
                      autoplay
                      loop
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>

              {/* IMAGE */}
              <div className="relative p-2">

                <div className="aspect-square rounded-[18px] overflow-hidden border border-white/10 bg-white">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* DOWNLOAD */}
                <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg border-2 border-white/30">
                  <Download className="w-3 h-3 text-green-900" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
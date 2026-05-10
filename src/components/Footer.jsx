import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Gift,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-green-400/20 bg-[#02140c]/80 backdrop-blur-md text-white pb-28 md:pb-10">

      {/* TOP BONUS BAR */}
      <div className="px-3 pt-3">

        <div className="rounded-2xl border border-green-400/30 bg-gradient-to-r from-[#123b23] to-[#1a5f38] px-4 py-3 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,120,0.08)]">

          <Gift className="w-5 h-5 text-yellow-300 animate-bounce" />

          <p className="text-[13px] md:text-sm font-bold text-green-100 text-center">
            Get exclusive signup bonuses and rewards
          </p>
        </div>
      </div>

      {/* PRIVACY BAR */}
      <div className="px-3 mt-3">

        <div className="relative overflow-hidden rounded-2xl border border-green-400/30 bg-[#d8e4dc]">

          {/* LEAVES */}
          <div className="absolute bottom-0 left-0 w-full">
            <img
              src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-green-leaf-decoration-border-png-image_9064654.png"
              alt=""
              className="w-full h-16 object-cover opacity-90"
            />
          </div>

          <div className="relative z-10 px-4 py-8 text-center">

            <div className="flex justify-center mb-2">
              <ShieldCheck className="w-5 h-5 text-white/90" />
            </div>

            <p className="text-[13px] font-semibold text-white">
              Data Privacy: Read privacy policies carefully
            </p>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative bg-[radial-gradient(circle_at_top,#0d5b2d_0%,#02140c_60%)] border-t border-green-400/20">

        {/* GREEN GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,255,120,0.10),transparent_35%),radial-gradient(circle_at_right,rgba(255,215,0,0.08),transparent_35%)]"></div>

        {/* SHIMMER */}
        <div className="absolute top-0 left-[-120%] w-[40%] h-full bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent skew-x-12 animate-[shine_5s_linear_infinite]"></div>

        <div className="relative z-10 px-5 pt-8">

          {/* BRAND */}
          <h2 className="text-[34px] font-black tracking-tight text-white">
            Yono Spot™
          </h2>

          <p className="mt-3 text-[16px] leading-7 text-green-100/90 max-w-[500px]">
            Discover and download the best apps with signup
            bonuses and exciting rewards.
          </p>

          {/* QUICK LINKS */}
          <div className="mt-10">

            <h3 className="text-[32px] font-black text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "All Apps",
                "Privacy",
                "About Us",
                "Contact",
              ].map((item, i) => (
                <button
                  key={i}
                  className="px-5 py-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-md text-[15px] font-semibold hover:bg-green-500 hover:text-black transition duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* FOLLOW */}
          <div className="mt-10">

            <h3 className="text-[32px] font-black text-white mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-5">

              <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-green-500 hover:text-black transition">
                <Facebook className="w-5 h-5" />
              </button>

              <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-pink-500 transition">
                <Instagram className="w-5 h-5" />
              </button>

              <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-sky-500 transition">
                <Twitter className="w-5 h-5" />
              </button>

              <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-green-400 hover:text-black transition">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 border-t border-white/10 pt-5 text-center">

            <p className="text-[12px] text-green-100/60 tracking-wide">
              © 2026 Yono Spot. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* SHIMMER KEYFRAME */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 160%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
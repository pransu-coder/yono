import React from "react";
import {
  ChevronRight,
  Wallet,
  CreditCard,
  Gift,
} from "lucide-react";

const Bank = () => {
  return (
    <div
      className="min-h-screen px-3 pt-16 pb-8 text-white"
      style={{
        background:
          "linear-gradient(to bottom,#06646d,#024149,#012f36)",
      }}
    >
      {/* TOP BALANCE */}
      <div className="bg-gradient-to-b from-[#0a8b93] to-[#03525a] border-2 border-yellow-400 rounded-[18px] py-5 mb-4 shadow-lg">
        <h1 className="text-center text-[42px] font-black leading-none">
          100.00
        </h1>
      </div>

      {/* WALLET BOX */}
      <div className="bg-gradient-to-b from-[#0a8b93] to-[#045860] border-2 border-yellow-400 rounded-[22px] p-3 mb-5">
        
        <div className="grid grid-cols-3 gap-2">
          
          {/* CARD */}
          {[
            {
              title: "BONUS",
              amount: "100",
              btn: "Transfer",
              yellow: false,
            },
            {
              title: "CASH",
              amount: "0.00",
              btn: "Add Cash",
              yellow: true,
            },
            {
              title: "WITHDRAW",
              amount: "0.00",
              btn: "Withdraw",
              yellow: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0b6770] border border-yellow-400 rounded-2xl p-2 text-center"
            >
              <div className="flex items-center justify-center gap-1">
                <p className="text-[11px] font-bold text-yellow-300">
                  {item.title}
                </p>

                <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 text-black text-[8px] flex items-center justify-center font-bold">
                  i
                </div>
              </div>

              <h2 className="text-[28px] font-black mt-1">
                {item.amount}
              </h2>

              <button
                className={`mt-3 w-full rounded-full py-1.5 text-[11px] font-bold ${
                  item.yellow
                    ? "bg-gradient-to-b from-yellow-300 to-yellow-500 text-black"
                    : "bg-gradient-to-b from-gray-200 to-gray-400 text-black"
                }`}
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] mt-4 text-cyan-100 font-medium">
          Tips: Withdrawable Balance = Winning Balance
        </p>
      </div>

      {/* OFFER CARD */}
      <div className="bg-gradient-to-r from-[#d82cff] to-[#8b00ff] border-2 border-yellow-400 rounded-[18px] p-3 mb-5 relative overflow-hidden">
        
        <div className="flex items-center gap-3">
          
          <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center">
            <Gift className="text-[#8b00ff]" size={22} />
          </div>

          <div>
            <p className="text-[11px] font-bold text-yellow-300">
              TO GET MORE COINS
            </p>

            <h2 className="text-[34px] font-black leading-none mt-1">
              200%
            </h2>

            <p className="text-[11px] underline mt-1">
              Check Details &gt;&gt;
            </p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="space-y-3">
        
        <div className="bg-gradient-to-r from-[#0b7f89] to-[#04545c] border-2 border-yellow-400 rounded-[18px] px-4 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Wallet className="text-yellow-300" size={18} />

            <p className="text-[14px] font-bold text-yellow-100">
              MY TRANSACTIONS
            </p>
          </div>

          <ChevronRight size={18} />
        </div>

        <div className="bg-gradient-to-r from-[#0b7f89] to-[#04545c] border-2 border-yellow-400 rounded-[18px] px-4 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <CreditCard className="text-yellow-300" size={18} />

            <div>
              <p className="text-[14px] font-bold text-yellow-100">
                MANAGE PAYMENTS
              </p>

              <p className="text-[10px] text-cyan-100">
                Bank account & wallets
              </p>
            </div>
          </div>

          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default Bank;
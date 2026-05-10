import React from 'react';

const Bonus = () => {
  return (
    <div className="p-6 pt-20 min-h-screen bg-[#020817]">
      <h1 className="text-2xl font-bold text-green-400 mb-6">DAILY BONUS</h1>
      <div className="grid gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div key={day} className="bg-[#0a2e1d] border border-green-500/30 p-4 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Day {day}</p>
              <p className="text-lg font-bold text-white">Get ₹{day * 10}</p>
            </div>
            <button className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold text-sm">CLAIM</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonus;

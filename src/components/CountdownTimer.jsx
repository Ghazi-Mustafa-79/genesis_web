import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // 🎯 Set absolute deadline (Sunday 23:59:59)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + ((7 - deadline.getDay()) % 7)); // Move to next Sunday
  deadline.setHours(23, 59, 59, 999);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = deadline.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-yellow-300 via-green-500 to-yellow-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-2 sm:py-3 text-white font-semibold gap-2">
        {/* Left - Early Bird Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left text-xs sm:text-sm md:text-base">
          <span className="font-extrabold text-sm sm:text-lg md:text-xl">
            🎉 Early Bird Discounts!
          </span>
          <span>
            Delegate Fee: <b>Rs. 4,500</b> | Delegation Fee: <b>Rs. 1,500</b>
          </span>
          <span className="hidden md:inline">| Standard: Rs. 5000 / 2000</span>
        </div>

        {/* Right - Countdown */}
        <div className="bg-white text-green-800 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-center text-xs border-2 border-green-800 sm:text-sm md:text-base">
          ⏳Offer Ends In:
          <span className="font-bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

// import React, { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const deadline = React.useRef(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

//   const calculateTimeLeft = React.useCallback(() => {
//     const now = new Date().getTime();
//     const difference = deadline.current - now;

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }, []);

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [calculateTimeLeft]);

//   return (
//     <div className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-yellow-300 via-green-500 to-yellow-400 shadow-lg">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-2 sm:py-3 text-white font-semibold gap-2">
//         {/* Left - Early Bird Info */}
//         <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left text-xs sm:text-sm md:text-base">
//           <span className="font-extrabold text-sm sm:text-lg md:text-xl">
//             🎉 Early Bird Discounts!
//           </span>
//           <span>
//             Delegate Fee: <b>Rs. 4,500</b> | Delegation Fee: <b>Rs. 1,500</b>
//           </span>
//           <span className="hidden md:inline">| Standard: Rs. 5000 / 2000</span>
//         </div>

//         {/* Right - Countdown */}
//         <div className="bg-green-800 px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md text-center text-xs sm:text-sm md:text-base">
//           ⏳ Ends in:{" "}
//           <span className="font-bold">
//             {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
//             {timeLeft.seconds}s
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;

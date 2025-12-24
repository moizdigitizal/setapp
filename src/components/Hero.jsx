import { BsApple } from "react-icons/bs";
import { FloatingCard } from "./FloatingCard";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center min-h-[600px] py-20 px-4 sm:px-6">
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        {/* Left Floating Cards */}
        <FloatingCard
          text="WORK WITH PICS"
          bgColor="#FDBA74"
          rotation={-12}
          shape="roundedBorderSquare"
          size={96}
          className="absolute left-[6%] top-[18%] sm:left-[4%] sm:top-[10%] xs:left-[2%] xs:top-[5%]"
        />
        <FloatingCard
          text="AI DOC"
          bgColor="#E0F2FE"
          rotation={12}
          shape="circle"
          size={96}
          className="absolute left-[12%] top-[40%] sm:left-[2%] sm:top-[28%] xs:left-[2%] xs:top-[20%]"
        />
        <FloatingCard
          text="BOOST TEAMWORK"
          bgColor="#BAE6FD"
          rotation={-8}
          shape="rounded"
          className="absolute left-[4%] bottom-[30%] sm:left-[5%] sm:bottom-[10%] xs:left-[3%] xs:bottom-[5%]"
        />
        <FloatingCard
          text="STAY SECURE"
          bgColor="#E0F2FE"
          rotation={6}
          shape="rounded"
          className="absolute left-[10%] bottom-[15%] sm:left-[3%] sm:bottom-[5%] xs:left-[2%] xs:bottom-[2%]"
        />

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-full">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-black rounded-[24px] flex items-center justify-center mb-6 sm:mb-8 mx-auto shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F5D77E] rotate-45 rounded-sm"
                />
              ))}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Dozens of apps.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            One subscription.
          </h2>

          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            $9.99
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-white hover:bg-gray-200 text-black h-12 w-full sm:w-56 rounded-lg shadow-lg flex items-center justify-center gap-2">
              <span className="text-black/70 text-sm">Try for 7 days free</span>
            </button>

            <div className="flex justify-center sm:justify-start gap-2 mt-2 sm:mt-0">
              <button className="bg-white hover:bg-gray-200 text-black h-12 w-12 rounded-lg shadow-lg flex items-center justify-center">
                <BsApple size={22} />
              </button>
              <button className="bg-white hover:bg-gray-200 text-black h-12 w-12 rounded-lg shadow-lg flex items-center justify-center">
                <FcGoogle size={22} />
              </button>
            </div>
          </div>

          <p className="text-white/60 text-sm mt-3 sm:mt-4 max-w-xs sm:max-w-md mx-auto">
            Power up your workflow with Setapp, a smart way to get apps.
          </p>
        </div>

        {/* Right Floating Cards */}
        <FloatingCard
          text="FIX WIFI"
          bgColor="#FDE68A"
          rotation={10}
          shape="roundedBorderSquare"
          size={96}
          className="absolute right-[6%] top-[18%] sm:right-[4%] sm:top-[10%] xs:right-[2%] xs:top-[5%]"
        />
        <FloatingCard
          text="PLAN YOUR DAY"
          bgColor="#BFDBFE"
          rotation={-12}
          shape="rounded"
          className="absolute right-[10%] top-[38%] sm:right-[2%] sm:top-[28%] xs:right-[2%] xs:top-[20%]"
        />
        <FloatingCard
          text="MANAGE YOUR MAC"
          bgColor="#FBCFE8"
          rotation={8}
          shape="rounded"
          className="absolute right-[6%] bottom-[32%] sm:right-[5%] sm:bottom-[10%] xs:right-[3%] xs:bottom-[5%]"
        />
        <FloatingCard
          text="CODE EASIER"
          bgColor="#FDBA74"
          rotation={-6}
          shape="roundedBorderSquare"
          size={96}
          className="absolute right-[12%] bottom-[16%] sm:right-[3%] sm:bottom-[5%] xs:right-[2%] xs:bottom-[2%]"
        />
      </div>
    </div>
  );
}

import Navigation from "./components/Navigation";
import SetappFooter from "./components/SetAppFooter";
import Hero from "./components/Hero";
import CardsSection from "./components/CardSection";
import { FaArrowRight } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2B2D32] tracking-tight">
      <Navigation />

      <main className="relative overflow-hidden">
        <div className="max-w-[1150px] mx-auto bg-[#2B2D32] px-4 sm:px-6">
          <Hero />
        </div>

        <div className="max-w-[1300px] mx-auto border-b border-white/50 mt-8"></div>

        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-10 lg:mb-20">
            <h2 className="text-2xl font-semibold text-white mb-4 lg:mb-0">
              What you get on Setapp.
            </h2>
            <p className="text-sm text-white/60 max-w-sm text-left lg:text-right">
              With a single monthly subscription at $9.99, you get 240+ apps for
              your Mac.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2 rounded-xl bg-gradient-to-br from-[#F3B6C6] via-[#E9A2B5] to-[#D88AA3] p-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-md bg-white flex items-center justify-center flex-shrink-0">
                  <MdLaptopChromebook size={26} />
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#2B2D32]">
                    Keep your Mac clean
                  </p>
                  <p className="text-[#2B2D32]/70">
                    Remove junk, scan for malware, wipe email attachments
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#C26A8A] to-[#9B4F6A]">
                <img
                  src="https://iili.io/fGU4M5N.png"
                  alt="Keep your Mac clean"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl bg-[#F6F1E7] p-5">
              <div className="mb-4 flex justify-center">
                <img
                  src="https://iili.io/fGUscTN.png"
                  alt="Write code"
                  className="rounded-md h-[200px] sm:h-[300px]"
                />
              </div>
              <p className="text-lg font-semibold text-[#2B2D32] mb-1">
                Write code
              </p>
              <p className="text-xs text-[#2B2D32]/70">
                Create applications in more than 25 languages
              </p>
            </div>

            <div className="rounded-xl bg-[#344B7A] p-5 text-white">
              <div className="gap-2 mb-4 flex flex-col items-center sm:items-start">
                <div className="border-2 mb-4 flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-r from-[#001f3d] via-[#003366] to-[#00509e]">
                  <SiAudiomack size={35} />
                </div>
                <h2 className="text-lg font-semibold text-center sm:text-left">
                  Join Meeting in a click
                </h2>
                <p className="text-sm text-gray-300 text-center sm:text-left">
                  Quickly access links to your meetings from menu bar
                </p>
              </div>
              <div className="mb-4 flex justify-center">
                <img
                  src="https://iili.io/fGUL0Hx.png"
                  alt="Write code"
                  className="rounded-md h-[200px] sm:h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-10">
            <button className="font-semibold text-white hover:text-white flex items-center gap-2">
              <FaArrowRight size={20} /> View all superpowers
            </button>
          </div>

          <div className="mx-auto px-4 sm:px-6 pt-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <h2 className="text-2xl text-white font-semibold leading-tight">
              Setapp in your words.
            </h2>

            <div className="flex justify-start md:justify-end">
              <p className="text-sm text-white/60 max-w-sm text-left md:text-right">
                With a single monthly subscription at $9.99, you get 240+ apps
                for your Mac.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1300px] mx-auto border-b border-white/50 mb-4"></div>

        <div className="bg-[linear-gradient(to_bottom,_#2B2D32_0%,_#2B2D32_35%,_#ffffff_15%,_#ffffff_100%)]">
          <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
            <CardsSection />
          </section>
        </div>

        <div className="bg-[linear-gradient(to_bottom,_#fff_0%,_#fff_50%,_#2B2D32_15%,_#2B2D32_100%)]">
          <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-20">
            <div className="bg-[#F5F4F2] w-full rounded-2xl p-6 sm:p-10 md:p-14">
              <div>
                <div className="w-8 h-8 mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-[#E8C6A8] rounded-sm" />
                    <div className="w-3 h-3 bg-[#E8C6A8] rounded-sm" />
                    <div className="w-3 h-3 bg-[#E8C6A8] rounded-sm" />
                    <div className="w-3 h-3 bg-[#E8C6A8] rounded-sm" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#2B2D32] leading-snug">
                  Superpowers starting $9.99/month.
                  <br />
                  Free for 7 days.
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-6 sm:mt-8">
                <button className="bg-[#2B2D32] text-white text-sm px-5 py-2.5 rounded-md hover:bg-black transition w-full sm:w-auto">
                  Get started now
                </button>
                <button className="border border-[#2B2D32]/30 text-[#2B2D32] text-sm px-5 py-2.5 rounded-md hover:bg-black/5 transition w-full sm:w-auto">
                  More about Setapp
                </button>
              </div>
            </div>
          </section>
        </div>

        <SetappFooter />
      </main>
    </div>
  );
}

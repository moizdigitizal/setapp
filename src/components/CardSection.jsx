import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function CardsSection() {
  return (
    <>
      <div className="relative rounded-2xl bg-[#7A5673] overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px]">
          <div className="px-6 sm:px-10 py-10 text-white flex flex-col items-start justify-center">
            <p className="text-lg sm:text-xl leading-relaxed max-w-md md:mb-4">
              Musicians like Jason use Setapp to push the limits of their
              creativity, dancing through task for more time to play.
            </p>
            <p className="text-sm text-white/60">Jason Snook</p>

            <button className="mt-6 sm:mt-10 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#7A5673]"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="relative h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-10 lg:mt-0">
            <img
              src="https://www.transparentpng.com/thumb/man/psW26l-download-man-png-image-png-image-freepngimg.png"
              alt="Jason testimonial"
              className="h-[280px] lg:h-[480px] w-full sm:w-auto object-contain"
            />
          </div>
        </div>

        <div className="absolute text-white top-4 right-4 flex gap-2 lg:top-6 lg:right-6">
          <BiChevronLeft size={23} />
          <BiChevronRight size={23} />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 2 ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto bg-white px-4 sm:px-6 py-8 flex flex-col md:grid md:grid-cols-2 items-center gap-4">
        <h2 className="text-2xl font-semibold leading-tight text-center md:text-left">
          Setapp in your words.
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6">
          <p className="text-sm text-gray-600 text-center md:text-right whitespace-normal">
            What you say about how Setapp powers you up.
          </p>

          <div className="flex justify-center md:justify-end gap-2 text-lg overflow-x-auto">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#145dbf] text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#178ad9] text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#005f8e] text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:brightness-90 text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-[1400px] px-4 sm:px-6">
        <TestimonialCard
          bgColor="#5B6983"
          textColor="white"
          quote="Have been using Setapp for almost two years, and I have to say it’s the best and the most cost-effective way of having apps on Mac."
          author="Arash Pourahbibi"
          role="iOS Developer"
          icon="twitter"
        />

        <TestimonialCard
          bgColor="#E6B07A"
          textColor="#2B2D32"
          quote="My favorites from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher."
          author="Mauricio Sanchez"
          role="Writer"
          icon="instagram"
        />

        <TestimonialCard
          bgColor="#7A5673"
          textColor="white"
          quote="For those of you that wondered where I discovered/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!"
          author="Meredith Sweet"
          role="Home & Lifestyle Blogger"
          icon="facebook"
        />
      </div>
    </>
  );
}

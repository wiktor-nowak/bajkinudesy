import React from "react";
import { Image } from "@imagekit/next";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { artFont, subtitleFont } from "../lib/fonts";
import { IoIosArrowDown } from "react-icons/io";

const REGISTRATION_LINK = "https://forms.gle/TNDXJtbHiTHvGrs17";

function Banner() {
  return (
    <div className="w-full relative overflow-hidden min-h-[100vh]">
      <div className="fixed top-0 left-0 w-full h-[150vh] md:h-[180vh] flex-1 min-h-0 -z-10">
        <Image
          urlEndpoint="https://ik.imagekit.io/wn3496"
          src="/B&N_zapowiedz/together.jpg"
          alt="Banner, dłonie na aparatach."
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fade-light to-raisin-black [--tw-gradient-stops:fade-light_90%,raisin-black_100%]" />
      </div>
      <div className="flex flex-col items-center mt-10 sm:mt-32">
        {/* banner for mobile */}
        <h2
          className={`${artFont.className}  sm:text-[150px] my-12 -rotate-8 text-textwhite leading-26 sm:leading-30 block lg:hidden`}
        >
          <p className="text-[120px]">BAJKI+</p>
          <p className="text-[90px]">NUDESY</p>
        </h2>
        {/* banner for wider screens */}
        <h2
          className={`${artFont.className} hidden lg:block text-[160px] mt-12 text-textwhite`}
        >
          BAJKI+NUDESY
        </h2>
        <p
          className={`text-columbia-blue text-xl my-8 mx-20 text-center ${subtitleFont.className}`}
        >
          Jednodniowe spotkanie fotograficzne w&nbsp;Bielsku-Białej. Jesienna
          edycja już 4&nbsp;października!
        </p>
        <Link
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={`${subtitleFont.className} text-2xl mt-4 sm:mt-8 rounded-lg bg-fade border-1 px-8 py-4 border-textwhite data-hover:bg-fade-dark data-active:bg-fade-dark cursor-pointer data-hover:border-columbia-blue data-hover:text-columbia-blue`}
          >
            Zapisz się
          </Button>
        </Link>
        <Button
          className="mt-8 md:mt-16 flex flex-col justify-center items-center gap-2 transition-transform duration-500 hover:scale-105 cursor-pointer"
          onClick={scrollToInfo}
        >
          <p className="font-bold">Dowiedz się więcej</p>
          <IoIosArrowDown size={20} />
        </Button>
      </div>
    </div>
  );
}

function scrollToInfo() {
  const element = document.getElementById("description");
  element?.scrollIntoView({
    behavior: "smooth",
  });
}

export default Banner;

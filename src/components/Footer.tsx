import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { subtitleFont } from "../lib/fonts";

const INSTA_LINK = "https://www.instagram.com/bajkinudesy/";
const MADE_BY_LINK = "https://www.wiktor-nowak.pl/";

function Footer() {
  return (
    <div className="w-full relative">
      <div className="w-full h-[80px] -z-10 inset-0 bg-gradient-to-b from-transparent to-blackish [--tw-gradient-stops:transparent_10%,blackish_100%]" />
      <footer className="w-full h-[160px] bg-blackish">
        <div className="flex gap-[12px] h-[80px] flex-wrap items-center justify-center">
          <p
            className={`${subtitleFont.className} text-lg sm:text-2xl ledaing-10`}
          >
            Obserwuj
          </p>
          <Link
            href={INSTA_LINK}
            className={`${subtitleFont.className} text-lg sm:text-xl ledaing-10`}
          >
            @bajkinudesy
          </Link>
          <Link href={INSTA_LINK}>
            <FaInstagram size={32} />
          </Link>
        </div>
        <p
          className={`${subtitleFont.className} text-sm flex h-[40px] flex-wrap items-center justify-center`}
        >
          Projekt i wykonanie:&nbsp;
          <Link href={MADE_BY_LINK} className={`text-columbia-blue`}>
            Wiktor Nowak
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;

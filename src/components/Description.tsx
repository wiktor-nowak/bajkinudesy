import React from "react";
import { artFont } from "../lib/fonts";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";

const PINTEREST_LINK = "https://pin.it/5AYXHIrG4";

function Description() {
  return (
    <div className="w-full">
      <div id="description" />
      <div className="text-xl mx-4 my-4 p-8 md:mx-24 md:p-20 md:pb-10 bg-fade rounded-2xl flex flex-col items-start gap-2">
        <p>
          Spotkajmy się w&nbsp;Bielsku-Białej na drugiej edycji
          fotospotkania&nbsp;
          <strong className={`${artFont.className} font-normal tracking-wider`}>
            BAJKI+NUDESY
          </strong>
          &nbsp;.
        </p>
        <p>
          Już 31 stycznia rozpocznij z&nbsp;nami artystyczny nowy rok
          i&nbsp;poznaj inne twórcze dusze, które w&nbsp;fotografii lubią
          wychodzić poza konwencjonalne ramki.
        </p>
        <p>
          Nieważne, czy wolisz bajki, czy sensuale zapewniamy, że zaspokoisz tu
          swoje artystyczne pragnienia.
        </p>
        <p>
          Sprawdź naszą tablicę inspiracji do setów przygotowywanych przez nas
          na to wydarzenie i&nbsp;poczuj ten klimat:
        </p>
        <div className="w-full md:w-1/2 mt-4 md:mt-8 flex justify-center items-center gap-8 md:gap-4 bg-gunmetal rounded-md p-4 self-center">
          <Link href={PINTEREST_LINK}>
            <FaPinterest
              size={40}
              className="hover:text-columbia-blue transition-transform duration-500 hover:scale-115"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Description;

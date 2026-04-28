import { Image } from "@imagekit/next";
import Link from "next/link";
import React from "react";

// const HUB_LINK = "https://www.instagram.com/aha_studio_bielsko/";
const FILMBEAST_LINK = "https://filmbeast.pl/";

function Sponsors() {
  return (
    <div className="w-full my-4 p-8 md:mx-24 md:p-10 bg-fade flex flex-col justify-center items-center gap-4 md:gap-10">
      <h4 className="text-2xl md:text-3xl text-slate-200 text-center mb-4 md:mb-2 px-4">
        Przy organizacji wspierają nas:
      </h4>
      <div className="w-full flex justify-center gap-5 md:gap-10">
        {/* <Link href={HUB_LINK}>
          <div className="relative flex-1">
            <Image
              urlEndpoint="https://ik.imagekit.io/wn3496"
              src="/logos/aha-studio.jpg"
              alt="Logo miejscówki, Aha-Studio"
              height={75}
              width={75}
              className="object-cover transition-transform duration-500 hover:scale-115"
            />
          </div>
        </Link> */}
        <Link href={FILMBEAST_LINK}>
          <div className="relative flex-1">
            <Image
              urlEndpoint="https://ik.imagekit.io/wn3496"
              src="/logos/filmbeast-yellow.webp"
              alt="Logo dostawcy i realizatora oświetlenia - FilmBeast"
              height={75}
              width={150}
              className="object-cover transition-transform duration-500 hover:scale-115"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sponsors;

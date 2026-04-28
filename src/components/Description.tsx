import React from "react";
import { artFont } from "../lib/fonts";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";

const PINTEREST_LINK = "https://pin.it/13Tmax5yT";

function Description() {
  return (
    <div className="w-full">
      <div id="description" />
      <div className="text-xl mx-4 my-4 p-8 md:mx-24 md:p-20 md:pb-10 bg-fade rounded-2xl flex flex-col items-start gap-2">
        <p>
          Spotkajmy się 30&nbsp;maja / 6&nbsp;czerwca (wybierz idealną datę dla
          siebie) na trzeciej już edycji fotospotkania&nbsp;
          <strong className={`${artFont.className} font-normal tracking-wider`}>
            BAJKI+NUDESY
          </strong>
          &nbsp;. Tym razem otwieramy lato: zapraszamy Was w&nbsp;tropiki, na
          bujną zieloną wyspę i&nbsp;łąkę pełną kwiatów.
        </p>
        <p>
          Nie ważne, czy robisz bajki, czy raczej sensuale (a może cokolwiek
          innego?) -&nbsp;to spotkanie będzie z&nbsp;pewnością owocne dla
          każdego uczestnika i&nbsp;uczestniczki. Sprawdź tablicę inspiracji do
          setów przygotowanych przez nas specjalnie na to wydarzenie
          i&nbsp;poczuj klimat:
        </p>

        <div className="w-full md:w-full mt-4 md:mt-8 flex justify-center items-center gap-8 md:gap-4 bg-slate-300/20 rounded-md p-4 self-center">
          <Link href={PINTEREST_LINK}>
            <FaPinterest
              size={40}
              className="hover:text-lime-300 transition-transform duration-500 hover:scale-115"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Description;

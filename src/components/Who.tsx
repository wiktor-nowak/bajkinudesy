import { Image } from "@imagekit/next";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

const KARO_INSTA = "https://www.instagram.com/karomro/";
const KARO_MAXMODELS = "https://www.maxmodels.pl/modelka-kmrowiec.html";

function Who() {
  return (
    // <div className="w-full">
    <div className="text-xl mx-4 my-4 p-8 md:mx-24 md:p-20 bg-fade rounded-2xl flex flex-col md:flex-row gap-4 md:gap-10">
      <div className="relative md:min-w-[450px] flex-1 overflow-hidden flex justify-center items-center">
        <Image
          urlEndpoint="https://ik.imagekit.io/wn3496"
          src="/B&N_zapowiedz/babetta_zimowa.jpg"
          alt="Organizatorka eventu."
          height={1352}
          width={900}
          className="rounded-lg"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fade-dark [--tw-gradient-stops:transparent_90%,fade-dark_100%]" /> */}
      </div>
      <div>
        <h4 className="text-4xl text-columbia-blue">
          Dlaczego warto mi zaufać?
        </h4>
        <article className="mt-4 md:mt-8 flex flex-col gap-4 md:gap-4">
          <p>
            Od ponad 13 lat działam w fotomodelingu, realizując projekty zarówno
            artystyczne, jak i&nbsp;komercyjne. Do każdej sesji podchodzę
            z&nbsp;pełnym zaangażowaniem – dbam o scenerię, stylizacje
            i&nbsp;detale.
          </p>
          <p>
            Moja głowa produkuje zbyt dużo pomysłów i&nbsp;stąd pomysł na
            stworzenie przestrzeni, w&nbsp;której mogę podzielić się
            z&nbsp;innymi osobami twórczymi kawałkiem swojego świata.
          </p>
          <p>
            Mam spore doświadczenie w  pozowaniu podczas warsztatów
            artystycznych, takich jak: Warsztaty Fotografii Artystycznej w 
            Złodziejewie z  Voodicą i  Agnieszką Lorek, Koronkowy Plener, Plener
            Światłocienie, warsztaty grupowe i  indywidualne z  Damianem
            Drewniakiem, udział w  Jurajskich Plenerach Fotograficznych i 
            Jurajskich Festiwalach, pokazach fryzur i  szkoleniach Akademii
            L’Oréal Professionnel, Akademii Stylizacji M.P. Babicz, Akademii
            Trendy, Akademii Berendowicz-Kublin.
          </p>
          <p>
            Współpracowałam m.in. ze Szkołą Wizażu i  Stylizacji Artystyczną
            Alternatywa w  Krakowie, Face Art Make-Up School w  Krakowie, Biar
            Beauty Group w  Katowicach, Akademią Fotografii w  Krakowie,
            Krakowskimi Szkołami Artystycznymi, House Of Make Up Academy w 
            Krakowie.
          </p>
          <div>Zobacz moje portfolio i&nbsp;Instagram:</div>
        </article>
        <ul className="mt-4 md:mt-8 flex justify-center items-center gap-8 md:gap-4 bg-gunmetal rounded-md p-4">
          <Link href={KARO_MAXMODELS}>
            <FiAtSign
              size={40}
              className="hover:text-columbia-blue transition-transform duration-500 hover:scale-115"
            />
          </Link>
          <Link href={KARO_INSTA}>
            <FaInstagram
              size={40}
              className="hover:text-columbia-blue transition-transform duration-500 hover:scale-115"
            />
          </Link>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default Who;

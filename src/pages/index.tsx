import List from "../components/List";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Description from "../components/Description";
import { casualFont } from "../lib/fonts";
import Who from "../components/Who";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <div
      className={`${casualFont.className} font-sans min-h-screen box-border`}
    >
      <main className="flex flex-col gap-[12px] row-start-2 items-center justify-center">
        <Banner />
        <div className="w-full flex justify-center items-center"></div>
        <Description />
        <List />
        <Who />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

// className={`absolute -top-24 -z-10 [mask-image:linear-gradient(to_right,transparent_0%,#000_20%,#000_80%,transparent_100%),linear-gradient(to_bottom,transparent_0%,#000_20%,#000_80%,transparent_100%)]
// [mask-composite:intersect]
// [-webkit-mask-composite:destination-in]`}

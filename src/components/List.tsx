import React from "react";

function List() {
  return (
    <div className="w-full">
      <div className="text-xl mx-4 my-4 p-8 md:mx-24 md:p-20 bg-fade rounded-2xl">
        <h4 className="text-3xl text-columbia-blue">Co gwarantujemy?</h4>
        <div className="w-full h-[2px] bg-columbia-blue rounded-full my-6 md:hidden" />
        <ul className="flex flex-col gap-[16px] justify-center items-start md:mt-8">
          <li>✔ Minimum cztery dopracowane sety tematyczne z rekwizytami</li>
          <li>✔ Profesjonalne oświetlenie studyjne by FilmBeast</li>
          <li>✔ Przekąski i napoje w trakcie wydarzenia</li>
          <li>✔ Wsparcie organizacyjne podczas całego spotkania</li>
          <li>
            ✔ Możliwość networkingu i nawiązania kontaktów z innymi twórcami
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;

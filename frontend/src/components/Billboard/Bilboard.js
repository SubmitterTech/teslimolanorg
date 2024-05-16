import React from "react";

const Bilboard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          className="w-screen"
          src="teslimolanorg_banner3.png"
          alt="teslimiyet banner"
        />
        <div
          className="flex flex-col gap-2 justify-end items-center px-2 py-4 absolute z-20 bg-white bg-opacity-80"
          style={{
            width: "95%",
            left: "50%",
            transform: "translate(-50%, -40%)",
          }}
        >
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Tüm Dinler Tek Bir Dinde Birleşti
          </h2>
          <button className="bg-teal-700 p-2 text-white">Devamını Oku</button>
        </div>
      </div>

      <div className="flex items-center flex-col gap-4 bg-black py-20 px-5">
        <h1 className="text-white text-3xl">
          Kuran, tüm Kuran, Kuran dışında hiçbir şey
        </h1>
        <p className="text-white">
          Veniam cillum ipsum magna amet labore qui labore reprehenderit esse.
          Labore in officia est labore eiusmod cupidatat. Labore nulla esse sunt
          laboris nulla duis minim quis nostrud enim culpa nisi elit. Aute duis
          elit ex cillum qui non proident nostrud nisi eiusmod. Sunt officia
          enim excepteur consequat esse exercitation magna reprehenderit quis
          non id do. Ad reprehenderit ad velit ipsum ullamco aute sint.
        </p>
      </div>
    </div>
  );
};

export default Bilboard;

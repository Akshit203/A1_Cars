import React from "react";

function Cars({ name, price, imgSrc }) {

    return (

      <div className="border-2 p-1 m-4 rounded-2xl w-72">

        <img src={imgSrc} alt={name} />

        <div className="items-center flex flex-col ">
          <span className="mt-4">{name}</span>
          <h4 className="mt-2">{price}</h4>
          <button className="w-48 border-2 p-2 border-orange-400 rounded-md mt-4 mb-8">Check Offers</button>
        </div>
      </div>
    );

  }

  export default Cars;
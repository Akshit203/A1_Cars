import { useState } from 'react';
import Cars from './components/Cars';
import './App.css';

function Header() {
  return (
    <div className="">

      <div className="bg-white border-b-2 border-grey flex justify-around p-4 items-center pt-6 pb-6">

        <div className="items-center text-4xl font-bold font-mono ">A1 CARS</div>

        <div className="border  border-black bg-gray-100 ">
          <input type="text" className="search-box bg-gray-100 p-3 w-72 outline-none " placeholder="Search Cars : Maruti Suzuki Alto" />
          <button className="bg-black text-white p-3" type="submit">Search</button>
        </div>

        <div className=" border-2 bg-white rounded-md p-3">
          <button> Login / Register </button>
        </div>

      </div>

      {/*
      <div className="flex bg-slate-300">
        <Dropdown title="NEW CARS" items={["Explore New Cars", "Electric Cars", "Upcoming Cars", "New Launches", "Car Insurance"]} />
        <Dropdown title="BUY & SELL USED CARS" items={["Used Cars", "Option 3", "Option 3"]} />
        <Dropdown title="NEW, REVIEWS & VIDEOS" items={["Option 1", "Option 2", "Option 3"]} />
        <Dropdown title="CAR SERVICES" items={["Option 1", "Option 2", "Option 3"]} />
      </div>
      */}
      
      {/*
      <div className="flex bg-slate-300">
        <Dropdown title="NEW CARS" items={["Explore New Cars", "Electric Cars", "Upcoming Cars", "New Launches", "Car Insurance"]} />
        <Dropdown title="BUY & SELL USED CARS" items={["Used Cars", "Option 3", "Option 3"]} />
        <Dropdown title="NEW, REVIEWS & VIDEOS" items={["Option 1", "Option 2", "Option 3"]} />
        <Dropdown title="CAR SERVICES" items={["Option 1", "Option 2", "Option 3"]} />
      </div>
      */}

    </div>
  );
}

function Dropdown({ title, items }) {
  return (
    <div className="dropdown">
      <a href="#" className="dropdown-link">{title}</a>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <a href="#" key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Header />
      <div className=" m-20 border-2 border-zinc-200 rounded-3xl p-8 mt-14">
        <div className="text-2xl font-semibold">The Most Searched Cars</div>

        <div className="flex justify-start mt-6 mb-4 border-b-2 pb-3">
          <a className ="m-4" href="#">SUV</a>
          <a className ="m-4" href="#">HatchBack</a>
          <a className ="m-4" href="#">Sedan</a>
          <a className ="m-4" href="#">MUV</a>
          <a className ="m-4" href="#">Luxury</a>
        </div>
        <div className="flex flex-wrap  ">
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />
        <Cars name="Mercedes Benz S Class" price="Rs 71.25 - 98.60 Lakh" imgSrc="/src/images/Mercedes-Benz-S-Class-.avif" />


       
        </div>

      </div>

      <div className=" m-20 h-96 border-2 border-zinc-200 rounded-3xl p-8">
        <div className="most-search">Recommended cars for you</div>
      </div>

      <div className=" m-20 h-96 border-2 border-zinc-200 rounded-3xl p-8">
        <div className="most-search">Latest Cars</div>
      </div>

      <div className=" m-20 h-96 border-2 border-zinc-200 rounded-3xl p-8">
        <div className="most-search">Upcoming Cars</div>
      </div>

      <div className=" m-20 h-96 border-2 border-zinc-200 rounded-3xl p-8">
        <div className="most-search">Electric Cars</div>
        <div className="most-search-nav-bar">
          <a href="#">Popular</a>
          <a href="#">Upcoming</a>
          <a href="#">Latest</a>
        </div>
      </div>

      <div className="cars-section">
        <div className="most-search">New Car Services</div>
      </div>
    </>
  );
}

export default App;

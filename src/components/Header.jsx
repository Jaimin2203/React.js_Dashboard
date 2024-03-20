import React from "react";
import Top from "../assets/Top.png";
import Main from "./Main";
import Top2 from "../assets/Top2.png"
import Top3 from "../assets/Top3.png";
import Chart from "./Chart";
import Map from "./Map";
import Footer from "./Footer";


const Header = () => {
  return (
    <div className="heaader_s">
      <div className="flex">
      <div className="nav_section-right">
        <div className="relative w-96">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-200 outline-none text-gray-900 text-sm rounded-lg focus:border-gray-200 block pl-4 p-2.5 w-full"
            placeholder="Search"
            required=""
          />
          <button
            type="button"
            className="text-gray-500 absolute right-0 top-3"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
            </svg>
          </button>
        </div>
    
        
        
      </div>

      <div className="nav_section-left">
      <button className="outline-none rounded-md focus:outline-none border px-3 py-1 mr-5 bg-white flex items-center min-w-[9rem]">
          <span className="pr-1 font-semibold flex-1">PewDiePie</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
          </svg>
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="bg-white p-2 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
              </svg>
              <span className="absolute top-[0.7rem] right-[0.8rem] h-[0.4rem] w-[0.4rem] bg-primary-red-dark rounded-full"></span>
            </button>
            <span class="absolute top-[0.7rem] right-[0.8rem] h-[0.4rem] w-[0.4rem] bg-primary-red-dark rounded-full"></span>
          </div>
          <div>
            <button className="bg-white p-2 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path>
              </svg>
            </button>
          </div>
          <div className="relative h-8 w-8 cursor-pointer">
            <img src={Top} alt="" srcset="" />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-ful"></span>
          </div>
        </div>
      </div>
      </div>



      <div>
        <Main />
        {/* Weekly Statistics Section */}
        <h1 className="font-gray-400 flex font-400 text-2xl mx-3 font-sans	">
          Weekly statistics
        </h1>
        <div>
          <div className="p-3 h-[8rem] flex text-center">
            <div
              className="w-full flex justify-center items-center text-gray-700 cursor-pointer rounded-lg main-box bg-white">
              <div className="flex flex-col p-5 justify-center">
                <div className="flex flex-col">
                  <p className="text-primary-red-dark font-medium flex mb-4">USERS</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[1rem] font-400  text-2xl font-serif text-center">
                    12,924
                  </p>
                  <img src={Top2} alt="line-type" className="ml-4 flex" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center hover:bg-primary-red-dark text-gray-700 main-box cursor-pointer rounded-lg">
              <div className="flex flex-col p-5 justify-center">
                <div className="flex flex-col">
                  <p className="text-primary-red-dark font-medium flex mb-4">New Users</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[1rem] font-400  text-2xl font-serif text-center">
                    5,200
                  </p>
                  <img src={Top3} alt="line-type" className="ml-4 flex" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center hover:bg-primary-red-dark text-gray-700 main-box cursor-pointer rounded-lg">
              <div className="flex flex-col p-5 justify-center">
                <div className="flex flex-col">
                  <p className="text-primary-red-dark font-medium flex mb-4">Page view</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[1rem] font-400  text-2xl font-serif text-center">
                    467k
                  </p>
                  <img src={Top2} alt="line-type" className="ml-4 flex" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center hover:bg-primary-red-dark text-gray-700 main-box cursor-pointer rounded-lg">
              <div className="flex flex-col p-5 justify-center">
                <div className="flex flex-col">
                  <p className="text-primary-red-dark font-medium flex mb-4">Bouce rate</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[1rem] font-400  text-2xl font-serif text-center">
                    43.5%
                  </p>
                  <img src={Top3} alt="line-type" className="ml-4 flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
      <Chart/>
      </div>
      <div className="p-3">
      <Map/>
      </div>
      <div className="p-3">
      <Footer/>
      </div>
    </div>
  );
};

export default Header;

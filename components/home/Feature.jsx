import React from "react";
import ThreeYellow from "../svg/feature/ThreeYellow";
import YellowPlus from "../svg/feature/YellowPlus";

import SmallStar from "../svg/success/SmallStar";
import SmallPlus from "../svg/feature/SmallPlus";
import Sniper from "../svg/feature/Sniper";
import SmallYellowStar from "../svg/success/SmallYellowStar";
import Star2 from "../svg/Star2";
import penguine from "@/public/images/penguine.png";
import Image from "next/image";
import FIrstLine from "../svg/feature/FIrstLine";
import Token from "../svg/feature/Token";
import Stalking from "../svg/feature/Stalking";
import SecondLine from "../svg/feature/SecondLine";
import Thunder from "../svg/feature/Thunder";

const featureData = [];

const Feature = () => {
  return (
    <div className=" xl:pt-28 pt-16 relative lg:mt-28 xl:mt-72  ">
      <div className=" absolute lg:top-[30%] top-60 left-5 sm:top-56 sm:left-10 md:left-28  lg:left-[5%]">
        <SmallStar />
      </div>

      <div className=" absolute lg:top-[30%] lg:right-[5%] top-72 right-8 sm:top-60 sm:right-14">
        <YellowPlus />
      </div>
      <div className=" absolute lg:top-[20%] lg:right-[15%] top-64 right-20 sm:top-56 sm:right-28">
        <SmallPlus />
      </div>

      <div className=" lg:px-0  max-w-[746px] mx-auto flex-col flex gap-5 justify-center items-center text-center relative ">
      
        <h1 className="  px-16 lg:text-[48px] md:text-[32px] text-[22px] text-peraColor font-normal">
          FEATURES THAT PUT YOU{" "}
          <span className=" relative text-[#32B4FF] font-[900]">
          <span className=" absolute -top-5 -right-6 ">
          <ThreeYellow />
        </span>
            AHEAD</span>{" "}
        </h1>
        <p className="text-[18px] font-medium text-peraColor px-4">
          More than a bot—it’s your passport to the Swell Layer 2 ecosystem.
        </p>
      </div>

      <div className="  px-12 lg:mt-16 mt-28  max-w-[1450px] mx-auto lg:grid grid-cols-3 xl:gap-16 lg:gap-5 gap-11 place-items-center  lg:place-items-start   ">
        {/* 1st card */}

        <div className="  mt-16 xl:px-6 px-3 xl:py-20 py-10 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 ">
          <div className=" absolute lg:-top-[11%] -top-16 -left-[4%]">
            <SmallYellowStar />
          </div>
          <div className=" absolute -top-[30%]">
            <Image src={penguine} alt="penguine" />
          </div>
          <div className="absolute -bottom-[8%] -left-[10%]">
            <FIrstLine />
          </div>

          <div>
            <Sniper />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className=" xl:text-[28px] text-[24px] font-[600] text-peraColor">
              Trading & Sniping
            </h2>
            <p className=" xl:text-base text-[14px] font-normal text-peraColor">
              {" "}
              Be the first to act on new opportunities with instant token
              snipes.
            </p>
          </div>
        </div>
        {/* 2nd card */}

        <div className=" lg:mt-0 mt-10 xl:py-20 py-10 xl:px-6 px-3 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 ">
          <div>
            <Token />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="xl:text-[28px] text-[24px] font-[600] text-peraColor">
              Trading & Sniping
            </h2>
            <p className=" xl:text-base text-[14px] font-normal text-peraColor">
              {" "}
              Be the first to act on new opportunities with instant token
              snipes.
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div className=" mt-12 xl:py-20  xl:px-6 px-3  py-10 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 ">
          <div className=" absolute lg:-top-[7%] lg:-right-[8%] -top-[230%] sm:right-20 right-12 ">
            <Thunder />
          </div>
          <div className=" lg:block hidden absolute -top-[30%]">
            <Image src={penguine} alt="penguine" />
          </div>
          <div className="absolute -bottom-[5%] -right-[10%]">
            <SecondLine />
          </div>

          <div>
            <Stalking />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="xl:text-[28px] text-[24px] font-[600] text-peraColor">
              Trading & Sniping
            </h2>
            <p className=" xl:text-base text-[14px] font-normal text-peraColor">
              {" "}
              Be the first to act on new opportunities with instant token
              snipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

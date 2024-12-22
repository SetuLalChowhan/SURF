import React from "react";
import bgImage1 from "@/public/images/bgImage.png";
import penguine from "@/public/images/penguineHand.png";
import ButtonArrow2 from "../svg/ButtonArrow2";
import Sky from "../svg/success/Sky";
import Sky2 from "../svg/bot/Sky2";
import WhiteStar from "../svg/bot/WhiteStar";
import WhiteSnake1 from "../svg/bot/WhiteSnake1";
import WhiteSnake2 from "../svg/bot/WhiteSnake2";
import Image from "next/image";
import vector from "@/public/images/Vector1.png";
import BlueStar from "../svg/bot/BlueStar";
import SmallBlueButton from "../svg/bot/SmallBlueButton";
import Star1 from "../svg/Star1";
import Thunder from "../svg/feature/Thunder";

const SurfBot = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" w-full h-[372px]   rounded-lg pt-24 relative  xlg:mt-24 mt-44  -z-10 "
    >
      <div className=" absolute -top-[30%] right-[1%] xlg:block hidden">
        <Image src={vector} alt="image" />
      </div>
      <div className=" absolute -top-[20%] left-[50%] lg:block hidden ">
        <BlueStar />
      </div>
      <div className=" absolute -top-[30%] left-[40%] lg:block hidden ">
        <SmallBlueButton />
      </div>

      <div className=" absolute -top-40 md:hidden block left-14">
        <Sky />
      </div>
      <div className=" absolute -top-40 md:hidden block right-14">
        <Star1 />
      </div>
      <div className=" absolute -top-32  md:hidden block right-14">
        <Thunder />
      </div>

      <div className=" absolute -top-20  md:hidden block left-14 ">
        <SmallBlueButton />
      </div>

      <div className=" container">
        <div className=" absolute xlg:top-[20%] top-6 left-[10%]">
          <Sky2 />
        </div>
        <div className=" absolute top-[80%] left-[10%]">
          <WhiteSnake1 />
        </div>
        <div className=" absolute xlg:top-[20%] top-6 right-[10%]">
          <WhiteStar />
        </div>
        <div className=" absolute xlg:top-[60%] top-[90%] xlg:right-[10%] right-[60%]">
          <WhiteSnake2 />
        </div>

        <div className=" absolute -top-[55%] lg:left-[10%] sm:left-[35%] left-[25%]">
          <Image src={penguine} alt="image" />
        </div>

        <div className=" max-w-[750px] mx-auto text-center flex flex-col gap-6 justify-center items-center  ">
          <h1 className="text-white xlg:text-[56px] md:text-[40px] text-[32px] font-[700] uppercase">
            SURF the tide of Swell.{" "}
          </h1>
          <p className=" italic text-white xlg:text-[36px] md:text-[24px] text-[16px] font-[400] uppercase -mt-4 ">
            The next wave of trading starts here.
          </p>

          <button className="bg-[#FFF] flex gap-[10px] py-3 px-6 shadow-custom rounded-[8px] transition-all duration-300 z-10 hover:opacity-85 cursor-pointer ">
            <span className="text-base text-[#49BCFF] font-bold">
              Use SURF Bot now
            </span>
            <span>
              <ButtonArrow2 />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurfBot;

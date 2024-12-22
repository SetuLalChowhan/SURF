import React from "react";
import SuccessImage from "@/public/images/success.png";
import SuccessImage2 from "@/public/images/success2.png";

import Image from "next/image";
import YellowLine from "../svg/success/YellowLine";
import CommonButton from "../button/CommonButton";
import ButtonArrow from "../svg/ButtonArrow";
import Sky from "../svg/success/Sky";
import rectangle1 from "@/public/images/Rectangle-1.png";
import Three from "../svg/success/Three";
import SmallYellowStar from "../svg/success/SmallYellowStar";
import Fly from "../svg/success/Fly";
import SmallStar from "../svg/success/SmallStar";

const Success = () => {
  return (
    <div className="w-full md:pt-28 pt-16 relative ">
      <div className=" absolute top-[5%] left-[5%] ">
        <Sky />
      </div>

      <div className=" absolute top-[1%] left-[55%]  2xl:top-[5%] md:top-[6%] lg:top-[8%] lg:left-[22%] xl:left-[18%] 2xl:left-[20%]">
        <Three />
      </div>
      <div className=" absolute  2xl:top-[10%] xl:top-[14%] md:top-[10%] top-[4%] left-[55%] lg:top-[14%] lg:left-[22%]  xl:left-[18%]  2xl:left-[20%] ">
        <Image
          src={rectangle1}
          alt="rectangle"
          className=" w-[48px] md:w-[60px]  lg:w-[79px]"
        />
      </div>
      <div className=" absolute lg:top-[20%] top-[4%]  md:top-[10%] right-[10%] xl:left-[33%] lg:left-[60%] ">
        <SmallYellowStar />
      </div>

      <div className=" absolute xl:block hidden top-[25%] left-[40%] ">
        <Sky />
      </div>
      <div className="absolute top-[50%] right-[70%] lg:top-[10%] lg:right-[5%] scale-x-[-1] lg:scale-x-[1]">
        <Fly />
      </div>
      <div className="absolute top-[70%] right-[80%] lg:top-[40%] lg:right-[5%]">
        <SmallStar />
      </div>

      {/* left side */}

      <div className=" flex lg:flex-row flex-col justify-center gap-5 items-center xl:justify-between ">
        <div className="container ">
          <div className=" flex flex-col justify-between items-center gap-5 2xl:gap-10 max-w-[400px] md:max-w-[542px] lg:mx-0 mx-auto lg:text-start text-center relative lg:items-start">
            <div className=" md:block hidden absolute top-[20%] left-[47%] lg:left-[35%] 2xl:left-[47%]">
              <YellowLine />
            </div>
            <div className="flex flex-col 2xl:gap-5 gap-3">
              <h1 className=" 2xl:text-[52px] text-[32px] md:text-[40px] font-normal ">
                SURF THE
                <span className="text-[#2042CA] font-[900]"> SWELL</span> OF
                SUCCESS{" "}
              </h1>
              <p className=" text-peraColor text-[14px] md:text-[18px] xl:pr-0 lg:pr-20 font-[500]">
                Effortlessly interact with tokens launched on the Swellchain.
                Anytime. Anywhere.
              </p>
            </div>
           <div className=" cursor-pointer">
           <CommonButton
              name={`Open SURF Telegram bot`}
              svg={<ButtonArrow />}
            />
           </div>
          </div>
        </div>

        {/* //right side */}
        <div className=" lg:absolute xl:top-[15%] lg:top-[50%] md:block hidden   w-full">
          <Image
            quality={100}
            priority
            src={SuccessImage}
            alt="image"
            className="  w-full "
          />
        </div>
        <div className=" w-full md:hidden block ">
          <Image
            quality={100}
            priority
            src={SuccessImage2}
            alt="image"
            className="  w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Success;

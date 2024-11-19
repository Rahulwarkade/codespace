import React from "react";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import kiku from "../../public/kiku.png";
import raghav from "../../public/raghav.png";
import milind from "../../public/milind.jpeg";

const Banner = () => {
  return (
    <main className="w-full h-full flex">
      <section className="w-2/6  h-full">
        <div className="w-full h-full flex items-center justify-center left-[100px] relative right-10">
          <div className="w-auto h-auto flex items-start flex-col  text-[#434343]  pr-52 ">
            <span className="w-[197px] h-[96px] ">
              <h1 className="text-[80px] font-medium leading-[96px]">Care</h1>
            </span>            
            <span className="w-[169px] h-[96px] ">
              <h1 className="text-[80px] font-medium leading-[96px]">Eats</h1>
            </span>            
            <span className="w-[254px] h-[96px] ">
              <h1 className="text-[80px] font-medium leading-[96px]">Get Fit</h1>
            </span>
            <p className="text-wrap leading-0">Personalised Health Plans, Premium Features,Top Coaches, Best Offers</p>
          </div>
          <button className="hidden"> Download our App</button>
        </div>
        <div className="hidden">
          <form>
            <h1>form</h1>
          </form>
        </div>
      </section>
      <section className="w-8/12  h-full  relative py-10">
        <div className="w-11/12 h-auto relative flex justify-end gap-7">
          <div className="hover:w-[450px] w-[200px] h-[500px] relative  bg-red-300 transition-all duration-500 ease-linear rounded-3xl overflow-hidden">
            <Image
              src={kiku}
              alt="kikuimage"
              fill
              style={{
                objectFit: "cover",
              }}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="hover:w-[450px] w-[200px] h-[500px] relative transition-all duration-300 ease-in-out bg-[#F9F9F9] rounded-3xl overflow-hidden">
            <Image
              src={raghav}
              alt="raghavimage"
              fill
              style={{
                objectFit: "cover",
              }}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="hover:w-[450px] w-[200px] h-[500px] bg-red-300 relative transition-all duration-300 ease-in-out rounded-3xl overflow-hidden">
            <Image
              src={milind}
              alt="milindimage"
              fill
              style={{
                objectFit: "cover",
              }}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>
      <section>
        <button className="md:hidden">Download our App</button>
      </section>
    </main>
  );
};

export default Banner;

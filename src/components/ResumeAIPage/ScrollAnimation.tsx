"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function ScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        // titleComponent={
        //   <>
        //     <h1 className="text-4xl font-semibold text-black dark:text-white">
        //       Unleash the power of <br />
        //       <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //         Scroll Animations
        //       </span>
        //     </h1>
        //   </>
        // }
      >
        <Image
          src={`https://cdn.prod.website-files.com/63ceaf62f99f0e75abf25e71/66f54b9ce3f4dba5bff0f894_resumai-hero-wonsulting-min%20(1).png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

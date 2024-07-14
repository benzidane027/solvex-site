"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
           
          </Typography>
          <Typography
            variant="h1"
            
            className="mb-2 max-w-lg text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            <span style={{color:"#0f22b2"}}>SOLVEX<br/> For Smart Solutions</span>
            
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
           Chez Solvex, nous transformons vos idées en solutions technologiques, personnalisée, adaptées aux besoins uniques de chaque client.
           Nos solutions vous permettent de gérer efficacement vos opérations et de dynamiser votre entreprise grâce à des outils robustes et flexibles
          </Typography>
          <Button size="lg" style={{backgroundColor:"#000"}}>
            Voir les offres
          </Button>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="content-center">
            <div>
              <Image
                width={600}
                height={600}
                src="/image/solvex-site.svg"
                className="-mt-20"
                alt="flowers"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;

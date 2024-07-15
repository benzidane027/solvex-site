"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Modularité",
    desc: "Choisissez les modules dont vous avez besoin",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Support Continu ",
    desc: "Bénéficiez d’un support technique et d’une maintenance continue pour garantir le bon fonctionnement de vos systèmes.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Expertise et Innovation",
    desc: "Notre équipe est composée de développeurs expérimentés permettant de vous offrir des solutions performantes et innovantes.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Facilité d’utilisation",
    desc: "Nos systèmes sont conçus pour être intuitifs et faciles à utiliser, permettant une adoption rapide par vos équipes.F",
  },
];

export function TopBookCategories() {
  return (
    <section  className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div  className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
        Le meilleur que l'on puisse offrir
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Solutions personnalisées : Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins et créer des solutions qui y répondent parfaitement.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              up to 40% OFF
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
            Meilleures offres
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Découvrez ce que nous proposons à travers nos nombreux services numériques
            </Typography>
            <Button  size="sm" color="white">
            Plus
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;

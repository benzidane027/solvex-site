"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [

  {
    icon: LifebuoyIcon,
    title: "Installer le système",
    description:
      "Nos services incluent la préparation du système au sein de votre organisation pour son utilisation. ",
  },
  {
    icon: BanknotesIcon,
    title: "Apprendre à utiliser",
    description:
      "Nos services incluent l'apprentissage de l'utilisation du système et de la manière d'en bénéficier.",
  },
  {
    icon: TruckIcon,
    title: "Nouveaux ajouts",
    description:
      "Nos services incluent l'ajout de fonctionnalités spéciales au système qui répondent aux besoins de votre entreprise.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
        Prêt à commencer ?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
        >
          Vous pouvez nous contacter et nous sommes là pour vous aider
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;

"use client";
import React from "react";

import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const FAQS = [
  {
    title: "Comment nous tarifons le travail ?",
    desc: "answer not written yet .",
  },
  {
    title: "Qu'obtiendra l'utilisateur en contractant avec nous ?",
    desc: "answer not written yet . ",
  },
  {
    title: "Quels sont les types de nos services ?",
    desc: "answer not written yet .",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 mt-20">
      <div className="container mx-auto">
        <div id="about" className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Solvex - Votre Partenaire Technologique
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            Chez Solvex, nous sommes passionnés par l’innovation et la
            technologie. Fondée sur les principes de qualité, d’intégrité et
            d’excellence, notre mission est de transformer les idées de nos
            clients en solutions technologiques performantes et sur mesure.
          </Typography>

          <Typography variant="h1" color="blue-gray" className="mb-4">
            Notre Vision
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            Nous croyons en un avenir où la technologie facilite la vie des
            entreprises et de leurs employés. Notre vision est de devenir un
            leader dans le domaine du développement ERP, d’applications mobiles
            et de sites web, en offrant des solutions innovantes qui stimulent
            la croissance et l’efficacité.
          </Typography>

          <Typography variant="h1" color="blue-gray" className="mb-4">
            Rejoignez-nous dans Notre Voyage Technologique
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            Nous vous invitons à explorer nos services et à découvrir comment
            Solvex peut vous aider à atteindre vos objectifs. Contactez-nous dès
            aujourd’hui pour discuter de vos besoins et commencer votre voyage
            technologique avec nous.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Faq;

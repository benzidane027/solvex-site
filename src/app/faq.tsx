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

  return (<></>
    // <section className="px-8 py-40">
    //   <div className="container mx-auto">
    //     <div className="text-center">
    //       <Typography variant="h1" color="blue-gray" className="mb-4">
    //         Questions fréquemment posées par les utilisateurs
    //       </Typography>
    //       <Typography
    //         variant="lead"
    //         className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
    //       >
    //         Ces questions incluent des réponses qui aident l'utilisateur à mieux
    //         nous connaître
    //       </Typography>
    //     </div>
    //     <div className="mx-auto lg:max-w-screen-lg lg:px-20">
    //       {FAQS.map(({ title, desc }, key) => (
    //         <Accordion
    //           key={key}
    //           open={open === key + 1}
    //           onClick={() => handleOpen(key + 1)}
    //         >
    //           <AccordionHeader className="text-left text-gray-900">
    //             {title}
    //           </AccordionHeader>
    //           <AccordionBody>
    //             <Typography
    //               color="blue-gray"
    //               className="font-normal text-gray-500"
    //             >
    //               {desc}
    //             </Typography>
    //           </AccordionBody>
    //         </Accordion>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}

export default Faq;

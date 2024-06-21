"use client";

import { Typography } from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const OTHER_BOOKS = [
  {
    img: `/image/books/achate-service-loge.svg`,
    category: "",
    title: "Prestation de service",
    desc: "Le module de gestion des demandes de prestations est conçu pour faciliter la gestion et le suivi des demandes de services adressées aux prestataires.",
    price: "",
    offPrice: "",
  },
 /*  {
    img: `/image/books/RectangleBig7.svg`,
    category: "William Gibson",
    title: "Neuromancer",
    desc: "A pioneering cyberpunk novel filled with futuristic technology and hackers.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `/image/books/RectangleBig1.svg`,
    category: "J.R.R. Tolkien",
    title: "The Hobbit",
    desc: "A timeless adventure through Middle-earth, featuring Bilbo Baggins and his quest.",
    price: "$99",
    offPrice: "$79",
  }, */
];

export function OtherBookOffers() {
  return (
    <section className="px-8 pt-28">
      <div className="container mx-auto mb-10">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Outils supplémentaires pour améliorer la productivité
        </Typography>
        <Typography variant="lead" className="w-full max-w-lg !text-gray-500">
          Escape into captivating stories, vibrant characters, and enchanting
          worlds with our extensive fiction collection.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {OTHER_BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherBookOffers;

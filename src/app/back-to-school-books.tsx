"use client";

import React from "react";
import {
  Typography,
  Button,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const BOOKS = [
  {
    img: `/image/books/rh-logo.svg`,
    category: "",
    title: "Ressources Humaines",
    desc: "Gère les dossiers des employés, la paie, le recrutement, la présence et les évaluations. Il facilite une gestion RH efficace et l'auto-service des employés",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/compta-logo.svg`,
    category: "",
    title: "Comptabilité",
    desc: "Gère les transactions financières, la facturation, les paiements et les rapports financiers. Il prend en charge plusieurs devises et la réconciliation automatisée.",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/stock-logo.svg`,
    category: "",
    title: "Inventaire",
    desc: "Suit les niveaux de stock, les mouvements et les opérations d'entrepôt. Il inclut des fonctionnalités pour l'évaluation des stocks, les transferts de stock et le réapprovisionnement automatisé.",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/vente-logo.svg`,
    category: "",
    title: "Ventes",
    desc: "Gère les commandes clients, les devis et les contrats clients. Il simplifie le processus de vente avec des suivis automatisés et des outils de gestion client.",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/achate-logo.svg`,
    category: "",
    title: "Achat",
    desc: "Gère les processus d'approvisionnement, les informations sur les fournisseurs et les commandes d'achat. Il inclut des demandes de devis (RFQ) et des accords d'achat automatisés.",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/fabrication-logo.svg`,
    category: "",
    title: "Fabrication",
    desc: "Gère le processus de fabrication, y compris la planification de la production, les ordres de travail et les nomenclatures (BOM). Il soutient les principes de fabrication lean.",
    price: "",
    offPrice: "",
  },
  {
    img: `/image/books/crm-logo.svg`,
    category: "",
    title: "CRM (Gestion de la Relation Client)",
    desc: " Gère les interactions avec les clients, les pipelines de vente et le suivi des prospects. Il aide à améliorer les relations client et l'efficacité des ventes.",
    price: "",
    offPrice: "",
  },
];

const BOOKS_TABS = [
  // "R.Humaines",
  // "Comptabilite",
  // "Inventaire",
  // "ventes",
  // "Achat",
  // "Fabrication"

];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("history");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
          
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-2">
        Outils fournis pour gérer votre entreprise
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
          color="blue-gray"
        >
          Ces outils sont des logiciels soigneusement conçus pour gérer votre travail en douceur au sein de votre organisation
        </Typography>
        <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg"
              }}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div>
    </section>
  );
}


export default BackToSchoolBooks;
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import PulsatingButton from "../ui/pulsating-button";

const MasonryGrid = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Projet E-commerce",
      description: "Une plateforme de vente en ligne moderne",
      image: "/img/1.jfif",
      height: "small",
    },
    {
      id: 2,
      title: "Application Mobile",
      description: "App de suivi fitness avec React Native",
      image: "/img/2.jfif",
      height: "large",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Interface d'analyse de données",
      image: "/img/3.jfif",
      height: "medium",
    },
    {
      id: 4,
      title: "Site Portfolio",
      description: "Portfolio personnel responsive",
      image: "/img/4.jpg",
      height: "medium",
    },
    {
      id: 5,
      title: "Blog Tech",
      description: "Blog technique avec Next.js",
      image: "/img/5.png",
      height: "large",
    },
    {
      id: 6,
      title: "Blog Tech",
      description: "Blog technique avec Next.js",
      image: "/img/6.png",
      height: "large",
    },
  ]);

  const getHeightClass = (height: string) => {
    switch (height) {
      case "small":
        return "h-64";
      case "medium":
        return "h-80";
      case "large":
        return "h-96";
      default:
        return "h-72";
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${getHeightClass(
              project.height
            )}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 text-white text-center p-4 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                  Voir le projet
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mx-auto py-8">
        <PulsatingButton>Voir plus</PulsatingButton>
      </div>
    </div>
  );
};

export default MasonryGrid;

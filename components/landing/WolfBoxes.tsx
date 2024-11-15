/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const WolfBoxes = () => {
  return (
    <div className="relative flex items-center justify-center m-0">
      <div className="w-full max-w-6xl h-[400px] flex gap-6 p-6 justify-around">
        {/* Box 1 - Expertise professionnelle */}
        <div
          className="w-[30%] h-full rounded-2xl shadow-xl overflow-hidden relative hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group"
          style={{
            animation: "floating 3s ease-in-out infinite",
            backgroundImage: "url('/img/0.jfif')",
            backgroundPosition: "left",
            backgroundSize: "300%",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 group-hover:from-black/40 group-hover:to-black/90 transition-all duration-500" />{" "} */}
          <div className="absolute inset-0 p-8 text-[#871b22f0] flex flex-col gap-4">
            <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-500">
              <h2 className="text-2xl font-bold mb-2">
                Expertise professionnelle
              </h2>
              <div className="w-16 h-1 bg-blue-400 rounded-full transform group-hover:scale-x-150 transition-transform duration-500 origin-left" />
            </div>
            <p className="text-md leading-relaxed text-gray-800 group-hover:text-foreground dark:group-hover:text-black transition-colors duration-500">
              Avec une maîtrise d'outils comme Photoshop et des compétences
              avancées en création de contenus, nous garantissons un travail de
              qualité
            </p>
          </div>
        </div>

        {/* Box 2 - Service personnalisé */}
        <div
          className="w-[30%] h-full rounded-2xl shadow-xl overflow-hidden relative hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group"
          style={{
            animation: "floating 3s ease-in-out infinite",
            animationDelay: "-1s",
            backgroundImage: "url('/img/0.jfif')",
            backgroundPosition: "center",
            backgroundSize: "300%",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 group-hover:from-black/40 group-hover:to-black/90 transition-all duration-500" />{" "} */}
          <div className="absolute inset-0 p-8 text-[#871b22f0] flex flex-col gap-4">
            <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-500">
              <h2 className="text-2xl font-bold mb-2">Service personnalisé</h2>
              <div className="w-16 h-1 bg-purple-400 rounded-full transform group-hover:scale-x-150 transition-transform duration-500 origin-left" />
            </div>
            <p className="text-md leading-relaxed text-gray-800 group-hover:text-foreground dark:group-hover:text-black transition-colors duration-500">
              Nos solutions sont adaptées à votre secteur d'activité, que vous
              soyez une boulangerie, une clinique ou un commerce de détail.
            </p>
          </div>
        </div>

        {/* Box 3 - Résultats mesurables */}
        <div
          className="w-[30%] h-full rounded-2xl shadow-xl overflow-hidden relative hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group"
          style={{
            animation: "floating 3s ease-in-out infinite",
            animationDelay: "-2s",
            backgroundImage: "url('/img/0.jfif')",
            backgroundPosition: "right",
            backgroundSize: "300%",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 group-hover:from-black/40 group-hover:to-black/90 transition-all duration-500" />{" "} */}
          <div className="absolute inset-0 p-8 text-[#871b22f0] flex flex-col gap-4">
            <div className="mb-4 transform group-hover:-translate-y-1 transition-transform duration-500">
              <h2 className="text-2xl font-bold mb-2">Résultats mesurables</h2>
              <div className="w-16 h-1 bg-teal-400 rounded-full transform group-hover:scale-x-150 transition-transform duration-500 origin-left" />
            </div>
            <p className="text-md leading-relaxed text-gray-800 group-hover:text-foreground dark:group-hover:text-black transition-colors duration-500">
              Nous vous fournissons des rapports réguliers pour suivre les
              performances de vos pages et vos campagnes.
            </p>
          </div>
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default WolfBoxes;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { DockDemo } from "@/components/landing/dockIcons";
import WolfBoxes from "@/components/landing/WolfBoxes";
import LandingHeader from "@/components/landing/landingHeader";
import MasonryGrid from "@/components/landing/projetGrid";
import { LayerSvg } from "@/components/svg/LayerSvg";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <section id="home" className="pt-16">
          <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid lg:grid-cols-2 gap-2 place-items-center pb-4">
              <div className="lg:col-span-1">
                <h1 className="text-5xl leading-normal xl:text-[66px] xl:leading-snug mb-8 font-bold text-interface-100">
                  Bienvenue chez <br />
                  <span className="relative">
                    <LayerSvg className="absolute inset-x-0 -bottom-1 w-full opacity-50" />
                    <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primary/90 dark:to-secondary/80 md:px-2">
                      The Wolf Art
                    </span>
                  </span>
                </h1>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-2xl lg:text-3xl/none">
                  Transformez votre présence en ligne, attirez vos clients
                  locaux.
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Chez The Wolf Art, nous aidons les petites entreprises à
                  rayonner sur le digital grâce à des contenus visuels
                  percutants et des stratégies sur mesure.
                </p>
                <div className="flex items-center gap-8 mt-4">
                  <a
                    href="#services"
                    className="bg-pblue-500 hover:bg-pblue-600 transition-all group text-white dark:text-black px-6 py-4 rounded-lg inline-flex justify-center items-center"
                  >
                    <RainbowButton className="dark:text-black">
                      Decouvrez nos services
                    </RainbowButton>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="relative">
                  <img src="/img/peniel-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="max-w-xl mx-auto text-center md:max-w-[42rem] lg:text-left lg:max-w-screen-xl">
            <p className="inline-flex items-center justify-center px-6 py-2 text-md font-medium tracking-wide text-foreground dark:text-[#871b22f0] rounded-r-full rounded-t-full bg-gradient-to-r from-dark-600 to-dark-700">
              Qui sommes-nous ?
            </p>
            <div className="grid container gap-6 my-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
                  The Wolf Art vous accompagne dans votre transformation
                  digitale.
                </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-xl text-foreground dark:text-slate-300">
                  Nous croyons au pouvoir des images et à l'importance d'une
                  stratégie adaptée pour attirer, captiver et fidéliser la
                  clientèle locale.
                </p>
              </div>
            </div>
          </div>
          <WolfBoxes />
        </section>

        <section id="services" className="py-12">
          <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
              <div className="relative rounded-2xl dark:bg-gradient-to-b from-gray-900/30 via-blue-900/40 to-gray-900/90">
                <img src="/img/about.PNG" className="w-full" alt="" />
                <DockDemo />
              </div>

              <div>
                <h2 className="text-interface-500 font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug mb-4">
                  The{" "}
                  <span className="relative">
                    <span className="relative z-20">Wolf Art</span>

                    <svg
                      className="absolute -left-4 z-0 -top-4"
                      width="180"
                      height="75"
                      viewBox="0 0 211 69"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.8353 5.20707C71.3242 4.06296 158.3 8.31774 193.87 22.426C232.179 37.6211 183.09 57.6423 130.454 63.5062C75.9959 69.573 16.3894 60.6604 5.75954 45.3131C-12.1857 19.4037 66.1136 2.68084 126.531 3.86657"
                        stroke="#871b22"
                        stroke-width="6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </h2>
                <p className="text-lg text-interface-200 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quis ducimus sapiente dolore eaque, laboriosam exercitationem
                  perspiciatis accusantium deserunt repellat.
                </p>

                <div className="mt-8 mb-10 space-y-6">
                  <div className="relative">
                    <div className="flex justify-between">
                      <span className="text-lg text-interface-100 font-medium block mb-3">
                        Création Audiovisuelle Personnalisée
                      </span>
                      <span className="text-lg font-medium text-interface-100 block mb-3">
                        88%
                      </span>
                    </div>
                    <div className="bg-[#D8D8DE] bg-opacity-20 w-full h-2 rounded">
                      <div
                        className="bg-[#871b22f0] h-2 rounded"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between">
                      <span className="text-lg text-interface-100 font-medium block mb-3">
                        Gestion Professionnelle des Réseaux Sociaux
                      </span>
                      <span className="text-lg font-medium text-interface-100 block mb-3">
                        57%
                      </span>
                    </div>
                    <div className="bg-[#D8D8DE] bg-opacity-20 w-full h-2 rounded">
                      <div
                        className="bg-[#871b22f0] h-2 rounded"
                        style={{ width: "57%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between">
                      <span className="text-lg text-interface-100 font-medium block mb-3">
                        Publicité sur les Réseaux Sociaux
                      </span>
                      <span className="text-lg font-medium text-interface-100 block mb-3">
                        82%
                      </span>
                    </div>
                    <div className="bg-[#D8D8DE] bg-opacity-20 w-full h-2 rounded">
                      <div
                        className="bg-[#871b22f0] h-2 rounded"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between">
                      <span className="text-lg text-interface-100 font-medium block mb-3">
                        Stratégie de Contenu et Suivi
                      </span>
                      <span className="text-lg font-medium text-interface-100 block mb-3">
                        82%
                      </span>
                    </div>
                    <div className="bg-[#D8D8DE] bg-opacity-20 w-full h-2 rounded">
                      <div
                        className="bg-[#871b22f0] h-2 rounded"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-12">
          <div className="mx-auto">
            <h2 className="text-center text-interface-500 font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug mb-12">
              Notre{" "}
              <span className="relative">
                <span className="relative z-20">Travail</span>

                <svg
                  className="absolute -left-4 z-0 -top-4"
                  width="150"
                  height="75"
                  viewBox="0 0 211 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.8353 5.20707C71.3242 4.06296 158.3 8.31774 193.87 22.426C232.179 37.6211 183.09 57.6423 130.454 63.5062C75.9959 69.573 16.3894 60.6604 5.75954 45.3131C-12.1857 19.4037 66.1136 2.68084 126.531 3.86657"
                    stroke="#871b22"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <MasonryGrid />
        </section>
      </main>
    </>
  );
}

import React from "react";
import homeBackground from "@/public/images/images/homebackground.webp";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="pb-10">
      <div className="w-full">
        <div
          className="relative min-h-[600px] flex flex-col items-start justify-end py-8 md:py-16 overflow-hidden bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(16, 28, 34, 0.9) 0%, rgba(19, 164, 236, 0.2) 100%), url(${homeBackground.src})`,
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
            <div className="relative z-10 max-w-2xl">
            <span className="bg-primary/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 mb-6 inline-block">
              Established 2025
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6">
              Atnurmi - Art, Design &amp; Web Studio
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
              <b>Where creativity meets design! </b>Elevating brands through
              premium art, visionary design, and high-performance web
              development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/services-page" className="rounded-xl ">
                My Services
              </Button>
              <Button variant="secondary" href="/shop" className="rounded-xl ">
                Free Shop
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

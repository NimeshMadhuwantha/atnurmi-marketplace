import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative min-h-[600px] flex flex-col items-start justify-end p-8 md:p-16 overflow-hidden rounded-3xl bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(16, 28, 34, 0.9) 0%, rgba(19, 164, 236, 0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuCJn7EuwYO-RD0eYGk2IyZgsGuDBzFQVVPrVG9vtOY624QLMuAnhliBQxKPgOGgXd5jTOHyCBVKtcjdDhX1AFBbenkKQQM22aHDfEiMQaMQo9_P8CopCsVQkUQtp5fTR0XvzooWr7PEqm0kK_NRqi8fGGyScwlSaQ40Lj5-xmfpDDqbbS1R1h-4pIu-_8-0dM4_K0E6do2tnF4dM_vDOzDwJdjRlyjxDockuSapL7BEne79eFecLYM6DG9StqTsMOvH0BFZuObqa6')`
          }}
        >
          <div className="relative z-10 max-w-2xl">
            <span className="bg-primary/20 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 mb-6 inline-block">
              Established 2024
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6">
              Atnurmi — Art, Design &amp; Web Studio
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
              Elevating brands through premium art, visionary design, and high-performance web development. Where craftsmanship meets digital precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105">
                View Portfolio
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-all">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/80 via-hero/60 to-hero" />
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-6 animate-fade-in">
          <!-- Evangelistas do Open Source -->
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6">
          Infraestrutura segura,
          <br />
          <span className="text-primary">sem compromissos.</span>
        </h1>
        <p className="text-lg md:text-xl text-hero-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Serviços de informática, técnicos e consultadoria. Implementamos e gerimos a sua infraestrutura com soluções de referência.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Ver Serviços
          </a>
          <a
            href="#nis2"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-hero-muted/30 text-hero-foreground font-medium hover:bg-hero-foreground/5 transition-colors"
          >
            Norma NIS2
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

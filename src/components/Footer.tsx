const Footer = () => {
  return (
    <footer className="py-12 bg-hero text-hero-muted">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-hero-foreground">egitech</span>
            <p className="text-sm mt-1">Serviços de Informática & Consultadoria</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#nis2" className="hover:text-primary transition-colors">NIS2</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-hero-muted/20 text-center text-xs">
          © {new Date().getFullYear()} egitech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

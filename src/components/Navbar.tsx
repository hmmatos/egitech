import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-hero-foreground">
          egitech
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-hero-muted">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#nis2" className="hover:text-primary transition-colors">NIS2</a>
          <a
            href="#contacto"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Contacto
          </a>
        </nav>
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-hero border-t border-hero-muted/10 px-6 py-4 flex flex-col gap-4 text-sm text-hero-muted">
          <a href="#servicos" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Serviços</a>
          <a href="#nis2" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">NIS2</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

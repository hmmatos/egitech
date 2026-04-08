import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/hmmatos@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Nova mensagem de contacto de ${form.name}`,
          _autoresponse: "Obrigado pelo seu contacto! A sua mensagem foi recebida com sucesso. Irá ser contactado brevemente pela nossa equipa. Cumprimentos, egitech",
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Fale connosco
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Peça mais informações
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Preencha o formulário e entraremos em contacto consigo brevemente.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mensagem enviada!</h3>
            <p className="text-muted-foreground text-sm">Obrigado pelo seu contacto. Responderemos o mais breve possível.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-shadow"
                placeholder="O seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-shadow"
                placeholder="email@exemplo.pt"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-shadow resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "A enviar..." : "Enviar mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

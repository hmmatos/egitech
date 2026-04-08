import { ShieldCheck } from "lucide-react";

const NIS2Section = () => {
  return (
    <section id="nis2" className="py-20 md:py-28 bg-card">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Conformidade
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
              Norma NIS2
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A diretiva NIS2 da União Europeia exige que organizações em setores críticos implementem medidas robustas de cibersegurança. Ajudamos a sua organização a cumprir todos os requisitos — desde a avaliação de risco até à implementação técnica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com as nossas soluções, garantimos conformidade total sem dependência de fornecedores proprietários, mantendo controlo total sobre a sua infraestrutura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIS2Section;

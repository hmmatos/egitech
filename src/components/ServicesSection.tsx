import { Shield, Server, Wifi, Activity, Database, Lock, Monitor, FileText } from "lucide-react";

const services = [
  { icon: Server, title: "Virtualização", desc: "Sistemas de virtualização eficientes e escaláveis" },
  { icon: Shield, title: "SIEM", desc: "Security Information and Event Management" },
  { icon: Lock, title: "IDS/IPS", desc: "Sistema de deteção e prevenção de intrusões" },
  { icon: Activity, title: "Monitorização 24/7", desc: "Monitorização contínua da sua infraestrutura" },
  { icon: FileText, title: "Logs Centralizados", desc: "Registo centralizado de logs para auditoria" },
  { icon: Database, title: "Backup & DR", desc: "Backup e disaster recovery para continuidade" },
  { icon: Monitor, title: "Firewall", desc: "Proteção de perímetro e controlo de acessos" },
  { icon: Wifi, title: "WiFi", desc: "Redes wireless seguras e de alto desempenho" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            O que implementamos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Serviços & Soluções
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

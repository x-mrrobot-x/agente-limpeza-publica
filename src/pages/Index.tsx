import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Monitor, Globe, ArrowRight, Info, Layers } from 'lucide-react';
import { SUBJECTS, type Subject } from '@/data/studyData';
import StudyModal from '@/components/StudyModal';

const ICONS: Record<string, React.ReactNode> = {
  book: <BookOpen size={24} />,
  calculator: <Plus size={24} />,
  monitor: <Monitor size={24} />,
  globe: <Globe size={24} />,
};

export default function Index() {
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);

  const daysLeft = useMemo(() => {
    const d = Math.ceil((new Date('2026-03-29T08:00:00').getTime() - Date.now()) / 86400000);
    return d > 0 ? d : 0;
  }, []);

  const stats = [
    { value: daysLeft.toString(), label: 'Dias p/ Prova', warn: true },
    { value: '29/03', label: 'Data da Prova' },
    { value: 'R$1.621', label: 'Salário' },
    { value: '25', label: 'Vagas' },
    { value: '44h', label: 'Carga Horária' },
    { value: 'F.I.', label: 'Fund. Incompleto' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 py-7">
          <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-black text-[0.65rem] tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Layers size={12} />
            Concurso Público 2026 — Macarani/BA
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
            Agente de Limpeza Pública
          </h1>
          <p className="text-muted-foreground text-sm mt-2 font-semibold">
            Material de Estudo Interativo — Preparação Completa e Simples
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl px-4 py-2.5 flex flex-col items-center min-w-[90px]"
              >
                <span className={`text-xl font-black tracking-tight leading-none ${s.warn ? 'text-warn' : 'text-primary'}`}>
                  {s.value}
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Notice */}
      <div className="max-w-4xl mx-auto px-5 mt-4">
        <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 flex items-start gap-3">
          <Info size={18} className="text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-primary/80 font-bold leading-relaxed">
            A prova tem 40 questões • 4 matérias • 25 pontos cada • Mínimo 50% em cada matéria para passar. Não pode zerar nenhuma!
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-5 pt-8 pb-16">
        {/* Subject Cards */}
        <SectionLabel icon={<BookOpen size={15} />} label="Escolha uma Matéria para Estudar" />

        <div className="space-y-3 max-w-2xl">
          {SUBJECTS.map((subj, i) => (
            <motion.div
              key={subj.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setActiveSubject(subj)}
                className="group w-full text-left bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 hover:translate-x-1"
              >
                <div className="w-14 h-14 min-w-[3.5rem] rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/30 transition-all">
                  {ICONS[subj.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground tracking-tight leading-tight">{subj.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{subj.desc}</p>
                  <div className="flex gap-1.5 flex-wrap mt-2">
                    {subj.chips.map((c, j) => (
                      <span
                        key={j}
                        className={`text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full border ${
                          c.variant === 'info'
                            ? 'bg-info/8 border-info/20 text-info'
                            : 'bg-primary/8 border-primary/20 text-primary'
                        }`}
                      >
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                  <span className="text-3xl font-black text-foreground/[0.04] tracking-tight select-none">{subj.num}</span>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <SectionLabel icon={<Info size={15} />} label="Sobre o Cargo" className="mt-12" />

        <div className="space-y-3 max-w-2xl">
          {[
            {
              label: 'O que faz',
              text: 'Realiza a varrição de ruas, calçadas e praças públicas, recolhe resíduos urbanos, opera carrinho de lixo, vassoura, pá e sacos de coleta. Mantém a limpeza e higiene dos espaços públicos do município de Macarani.',
            },
            {
              label: 'Aprovação Mínima',
              text: 'Mínimo de 50% em Português, 50% em Conhecimentos Gerais e 50% no total (50 pts). Zero em qualquer matéria = reprovado automaticamente.',
            },
            {
              label: 'Dia da Prova',
              text: 'Cidade de Macarani/BA — data 29 de março de 2026. Chegue 45 minutos antes. Leve documento com foto e caneta esferográfica preta. Celular proibido.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-card-elevated border border-border rounded-2xl p-5">
              <span className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-muted-foreground text-xs py-5 border-t border-border">
        Concurso Público — Prefeitura Municipal de Macarani/BA • Edital Nº 01/2026 • Material de estudo com fins educacionais
      </footer>

      <StudyModal subject={activeSubject} onClose={() => setActiveSubject(null)} />
    </div>
  );
}

function SectionLabel({ icon, label, className = '' }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 mb-4 ${className}`}>
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>
  );
}

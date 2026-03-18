import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, CheckSquare, RotateCcw, ArrowRight } from 'lucide-react';
import type { Subject, Exercise } from '@/data/studyData';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Props {
  subject: Subject | null;
  onClose: () => void;
}

export default function StudyModal({ subject, onClose }: Props) {
  const [tab, setTab] = useState<'resumo' | 'exercicios'>('resumo');
  const [exOrder, setExOrder] = useState<number[]>([]);
  const [exIdx, setExIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [optMapping, setOptMapping] = useState<number[]>([]);

  useEffect(() => {
    if (subject) {
      setTab('resumo');
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [subject]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const startExercises = useCallback(() => {
    if (!subject) return;
    const order = shuffle(subject.exercises.map((_, i) => i));
    setExOrder(order);
    setExIdx(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setOptMapping(shuffle([0, 1, 2, 3]));
    setTab('exercicios');
  }, [subject]);

  const currentEx = useMemo<Exercise | null>(() => {
    if (!subject || exOrder.length === 0 || exIdx >= exOrder.length) return null;
    return subject.exercises[exOrder[exIdx]];
  }, [subject, exOrder, exIdx]);

  const correctMapped = useMemo(() => {
    if (!currentEx) return -1;
    return optMapping.indexOf(currentEx.ans);
  }, [currentEx, optMapping]);

  const handlePick = (mappedIdx: number) => {
    if (answered) return;
    setAnswered(true);
    setSelected(mappedIdx);
    if (mappedIdx === correctMapped) setScore(s => s + 1);
  };

  const handleNext = () => {
    setAnswered(false);
    setSelected(null);
    setExIdx(i => i + 1);
    setOptMapping(shuffle([0, 1, 2, 3]));
  };

  const finished = exOrder.length > 0 && exIdx >= exOrder.length;
  const pct = exOrder.length > 0 ? Math.round((exIdx / exOrder.length) * 100) : 0;
  const letters = ['A', 'B', 'C', 'D'];

  if (!subject) return null;

  return (
    <AnimatePresence>
      {subject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/85 backdrop-blur-sm z-40"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-card border border-border w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl pointer-events-auto flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 md:p-6 border-b border-border flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-foreground">{subject.title}</h2>
                    <p className="text-xs text-muted-foreground">{subject.sub}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-destructive hover:border-destructive hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border shrink-0 px-5 md:px-6">
                <button
                  onClick={() => setTab('resumo')}
                  className={`py-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${tab === 'resumo' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}
                >
                  <BookOpen size={14} /> Resumo
                </button>
                <button
                  onClick={startExercises}
                  className={`py-3 px-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${tab === 'exercicios' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}
                >
                  <CheckSquare size={14} /> Exercícios
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-5 md:p-6">
                {tab === 'resumo' && (
                  <div className="space-y-4">
                    {subject.resumo.map((block, i) => (
                      <div key={i} className="bg-card-elevated border border-border rounded-xl p-4 md:p-5">
                        <h3 className="text-primary text-sm font-bold mb-3 flex items-center gap-2">
                          {block.title}
                        </h3>
                        {block.content && (
                          <p className="text-muted-foreground text-sm leading-relaxed">{block.content}</p>
                        )}
                        {block.items && (
                          <ul className="text-muted-foreground text-sm leading-loose list-disc pl-4 space-y-0.5">
                            {block.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {block.highlight && (
                          <div className="mt-3 bg-primary/5 border-l-2 border-primary rounded-r-lg px-3 py-2 text-sm text-primary/80 leading-relaxed">
                            {block.highlight}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'exercicios' && !finished && currentEx && (
                  <div>
                    {/* Progress */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex-1 bg-secondary rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-bold whitespace-nowrap">
                        {exIdx + 1}/{exOrder.length}
                      </span>
                    </div>

                    {/* Question */}
                    <div className="bg-card-elevated border border-border rounded-xl p-5">
                      <p className="font-bold text-foreground leading-relaxed mb-5">{currentEx.q}</p>
                      <div className="space-y-2.5">
                        {optMapping.map((origIdx, mappedIdx) => {
                          const isCorrect = answered && mappedIdx === correctMapped;
                          const isWrong = answered && mappedIdx === selected && mappedIdx !== correctMapped;
                          return (
                            <button
                              key={mappedIdx}
                              disabled={answered}
                              onClick={() => handlePick(mappedIdx)}
                              className={`w-full text-left rounded-xl border p-3 flex items-start gap-3 transition-all text-sm font-semibold ${
                                isCorrect
                                  ? 'bg-primary/10 border-primary text-primary'
                                  : isWrong
                                  ? 'bg-destructive/10 border-destructive text-destructive'
                                  : answered
                                  ? 'bg-secondary/50 border-border text-muted-foreground cursor-default'
                                  : 'bg-secondary border-border text-foreground hover:border-primary/40 hover:bg-card-elevated'
                              }`}
                            >
                              <span
                                className={`w-6 h-6 min-w-[1.5rem] rounded-full flex items-center justify-center text-xs font-black ${
                                  isCorrect
                                    ? 'bg-primary text-primary-foreground'
                                    : isWrong
                                    ? 'bg-destructive text-foreground'
                                    : 'bg-border text-muted-foreground'
                                }`}
                              >
                                {letters[mappedIdx]}
                              </span>
                              {currentEx.opts[origIdx]}
                            </button>
                          );
                        })}
                      </div>

                      {answered && (
                        <div
                          className={`mt-4 rounded-xl border p-3 text-sm leading-relaxed ${
                            selected === correctMapped
                              ? 'bg-primary/5 border-primary/20 text-primary/80'
                              : 'bg-destructive/5 border-destructive/20 text-destructive/80'
                          }`}
                        >
                          <strong>{selected === correctMapped ? '✓ Correto! ' : '✗ Incorreto. '}</strong>
                          {currentEx.explain}
                        </div>
                      )}

                      <div className="flex gap-3 mt-4 flex-wrap">
                        <button
                          onClick={startExercises}
                          className="px-4 py-2.5 rounded-lg bg-secondary border border-border text-muted-foreground text-sm font-bold hover:border-primary/40 hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <RotateCcw size={14} /> Reiniciar
                        </button>
                        <button
                          onClick={handleNext}
                          disabled={!answered}
                          className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold disabled:opacity-40 disabled:cursor-default hover:brightness-110 transition-all flex items-center gap-2"
                        >
                          Próxima <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {tab === 'exercicios' && finished && (
                  <ResultScreen
                    score={score}
                    total={exOrder.length}
                    onRetry={startExercises}
                    onResumo={() => setTab('resumo')}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function ResultScreen({ score, total, onRetry, onResumo }: { score: number; total: number; onRetry: () => void; onResumo: () => void }) {
  const pct = Math.round((score / total) * 100);
  const { emoji, msg } = useMemo(() => {
    if (pct >= 90) return { emoji: '🏆', msg: 'Excelente! Você está muito bem preparado!' };
    if (pct >= 70) return { emoji: '⭐', msg: 'Muito bom! Revise os erros e vai bem na prova!' };
    if (pct >= 50) return { emoji: '👍', msg: 'Bom trabalho! Revise o resumo e tente novamente!' };
    return { emoji: '💪', msg: 'Continue tentando! Leia o Resumo com calma e refaça.' };
  }, [pct]);

  return (
    <div className="text-center py-6">
      <span className="text-5xl block mb-4">{emoji}</span>
      <div className="text-5xl font-black tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
        {score}/{total}
      </div>
      <p className="text-muted-foreground text-sm mt-1">{pct}% de acertos</p>
      <div className="max-w-sm mx-auto bg-secondary rounded-full h-3 overflow-hidden mt-5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full"
        />
      </div>
      <p className="text-muted-foreground text-sm mt-5 leading-relaxed">{msg}</p>
      <div className="flex gap-3 mt-6 justify-center flex-wrap">
        <button
          onClick={onResumo}
          className="px-5 py-2.5 rounded-lg bg-secondary border border-border text-muted-foreground text-sm font-bold hover:border-primary/40 hover:text-primary transition-colors flex items-center gap-2"
        >
          <BookOpen size={14} /> Ver Resumo
        </button>
        <button
          onClick={onRetry}
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:brightness-110 transition-all flex items-center gap-2"
        >
          <RotateCcw size={14} /> Tentar Novamente
        </button>
      </div>
    </div>
  );
}

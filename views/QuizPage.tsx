
import React, { useState, useEffect, useMemo } from 'react';
import { QUIZZES } from '../data/quizzes';
import { QuizData, Question, QuizResult, RateRange, TypeCategory } from '../types';
import { shareToWhatsApp, shareToTwitter, copyToClipboard } from '../utils/sharing';

interface QuizPageProps {
  quizId: string;
}

export const QuizPage: React.FC<QuizPageProps> = ({ quizId }) => {
  const quiz = QUIZZES.find(q => q.id === quizId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState<QuizResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex, showResult]);

  const stats = useMemo(() => {
    if (!quiz) return null;
    
    if (quiz.type === 'rate') {
      let minRaw = quiz.startingScore ?? 0;
      let maxRaw = quiz.startingScore ?? 0;
      quiz.questions.forEach(q => {
        const values = q.options.map(o => o.value as number);
        minRaw += Math.min(...values);
        maxRaw += Math.max(...values);
      });
      return { min: minRaw, max: maxRaw };
    } else {
      const catMins: Record<string, number> = {};
      const catMaxes: Record<string, number> = {};
      
      quiz.questions.forEach(q => {
        const weightsByCat: Record<string, number[]> = {};
        q.options.forEach(o => {
          Object.entries(o.value as Record<string, number>).forEach(([catId, w]) => {
            if (!weightsByCat[catId]) weightsByCat[catId] = [];
            weightsByCat[catId].push(w);
          });
        });
        
        quiz.categories?.forEach(cat => {
          const weights = weightsByCat[cat.id] || [0];
          catMins[cat.id] = (catMins[cat.id] || 0) + Math.min(...weights, 0);
          catMaxes[cat.id] = (catMaxes[cat.id] || 0) + Math.max(...weights, 0);
        });
      });
      return { categoryMins: catMins, categoryMaxes: catMaxes };
    }
  }, [quiz]);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '/';
  };

  if (!quiz) {
    return (
      <div className="text-center py-40 px-6 space-y-8">
        <h2 className="text-3xl font-black">Test module not found.</h2>
        <a href="#/" onClick={goHome} className="inline-block px-8 py-4 bg-indigo-600 rounded-2xl font-bold">Return to Library</a>
      </div>
    );
  }

  const handleOptionSelect = (questionId: string, value: any) => {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 350);
    } else {
      setTimeout(() => calculateAndSaveResult(nextAnswers), 600);
    }
  };

  const calculateAndSaveResult = (finalAnswers: Record<string, any>) => {
    let result: QuizResult;
    if (quiz.type === 'rate' && stats) {
      const rawScore = (quiz.startingScore ?? 0) + Object.values(finalAnswers).reduce((acc, val) => acc + (val as number), 0);
      // Normalize to 0-100
      const range = stats.max - stats.min || 1;
      const normalizedScore = Math.round(((rawScore - stats.min) / range) * 100);
      result = { quizId: quiz.id, type: 'rate', timestamp: Date.now(), score: Math.max(0, Math.min(100, normalizedScore)) };
    } else {
      const scores: Record<string, number> = {};
      Object.values(finalAnswers).forEach(val => {
        Object.entries(val as Record<string, number>).forEach(([catId, weight]) => {
          scores[catId] = (scores[catId] || 0) + weight;
        });
      });
      const winner = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      result = { quizId: quiz.id, type: 'type', timestamp: Date.now(), categoryWinner: winner, categoryScores: scores };
    }

    setFinalResult(result);
    setShowResult(true);
    const saved = localStorage.getItem('quiz_results');
    let results: QuizResult[] = saved ? JSON.parse(saved) : [];
    results = results.filter(r => r.quizId !== quiz.id);
    results.push(result);
    localStorage.setItem('quiz_results', JSON.stringify(results));
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
    setFinalResult(null);
  };

  const renderResult = () => {
    if (!finalResult) return null;

    let resultTitle = '';
    let resultMessage = '';
    let shareText = '';

    if (finalResult.type === 'rate' && quiz.rateRanges) {
      const score = finalResult.score || 0;
      const range = quiz.rateRanges.find(r => score >= r.min && score <= r.max) || quiz.rateRanges[quiz.rateRanges.length - 1];
      resultTitle = range.title;
      resultMessage = range.message;
      shareText = `My ${quiz.title} result: I scored ${score}%! What about you?`;
    } else if (finalResult.type === 'type' && quiz.categories) {
      const winner = quiz.categories.find(c => c.id === finalResult.categoryWinner);
      resultTitle = winner?.title || 'Unknown';
      resultMessage = winner?.description || '';
      shareText = `I'm a "${resultTitle}" according to Testhacolic! Find your profile: ${window.location.href}`;
    }

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className="glass rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
          <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full" />
          <div className="p-8 sm:p-20 text-center space-y-10 sm:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-indigo-400">Analysis Complete</span>
              <h2 className="text-4xl sm:text-7xl font-black text-white">{resultTitle}</h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto italic">
                "{resultMessage}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="space-y-6">
                <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-slate-500">Identity Distribution Map</h3>
                
                {finalResult.type === 'rate' ? (
                  <div className="space-y-4 p-6 sm:p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400">
                      <span>MIN: 0%</span>
                      <span className="text-indigo-400 font-black">RESULT: {finalResult.score}%</span>
                      <span>MAX: 100%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-1000"
                        style={{ width: `${Math.max(2, finalResult.score!)}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 p-6 sm:p-8 bg-slate-900/50 rounded-3xl border border-white/5">
                    {quiz.categories?.map(cat => {
                      const score = finalResult.categoryScores![cat.id] || 0;
                      const max = stats?.categoryMaxes?.[cat.id] || 1;
                      const min = stats?.categoryMins?.[cat.id] || 0;
                      const percent = ((score - min) / (max - min || 1)) * 100;
                      const isWinner = cat.id === finalResult.categoryWinner;
                      return (
                        <div key={cat.id} className="space-y-2">
                          <div className="flex justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                            <span className={isWinner ? 'text-indigo-400' : 'text-slate-500'}>{cat.title}</span>
                            <span className={isWinner ? 'text-indigo-400 font-black' : 'text-slate-600'}>{Math.round(percent)}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-1000 ${isWinner ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-slate-700/50'}`}
                              style={{ width: `${Math.max(2, percent)}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-slate-500">Actions & Verification</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button onClick={() => shareToWhatsApp(shareText)} className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-black text-xs sm:text-sm hover:scale-[1.02] transition-transform flex items-center justify-center shadow-lg shadow-green-500/20">
                    Share to WhatsApp
                  </button>
                  <button onClick={() => shareToTwitter(shareText)} className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs sm:text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-white/10">
                    Post on X
                  </button>
                  <button onClick={async () => {
                    if (await copyToClipboard(shareText)) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
                  }} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-black text-xs sm:text-sm hover:scale-[1.02] transition-transform">
                    {copied ? 'Copied to Clipboard! ✨' : 'Copy Result Link'}
                  </button>
                </div>
                <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Diagnostic Metadata</p>
                  <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-slate-600">
                    <span>Engine: V1.9.5</span>
                    <span>Proc: {Date.now().toString(36).toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <button onClick={resetQuiz} className="text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                Retake This Test
              </button>
              <a href="#/" onClick={goHome} className="w-full sm:w-auto px-10 py-4 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-2xl font-bold hover:bg-indigo-500 hover:text-white transition-all text-center">
                Back to Library
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  if (showResult) return renderResult();

  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-0">
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">{quiz.title}</h2>
            <p className="text-[10px] sm:text-sm font-bold text-indigo-400 uppercase tracking-widest">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
          </div>
          <a href="#/" onClick={goHome} className="p-2 sm:p-3 bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-xl sm:rounded-2xl transition-all">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>
        </div>
        <div className="h-2.5 sm:h-3 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="glass rounded-[2rem] sm:rounded-[3rem] border border-white/5 p-6 sm:p-16 space-y-10 sm:space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
          {currentQuestion.text}
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
              className="group text-left p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 flex items-center space-x-4 sm:space-x-6 transform active:scale-[0.98]"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-3xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors shadow-inner">
                 <span className="text-indigo-400 group-hover:text-white font-black text-sm sm:text-lg">{idx + 1}</span>
              </div>
              <span className="text-base sm:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors leading-tight">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <p className="text-center text-[8px] sm:text-xs font-bold text-slate-600 uppercase tracking-[0.4em] animate-pulse">
        Diagnostic Engine Processing Next Packet...
      </p>
    </div>
  );
};

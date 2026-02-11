
import React, { useEffect, useState, useMemo } from 'react';
import { QuizCard } from '../components/QuizCard';
import { QUIZZES } from '../data/quizzes';
import { QuizResult } from '../types';

export const Home: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('quiz_results');
    if (saved) {
      try {
        const results: QuizResult[] = JSON.parse(saved);
        setCompletedIds(results.map(r => r.quizId));
      } catch (e) {
        console.error("Failed to parse results", e);
      }
    }
  }, []);

  const filteredQuizzes = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return QUIZZES;
    return QUIZZES.filter(quiz => 
      quiz.title.toLowerCase().includes(query) || 
      quiz.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto pt-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
          New Modules Available
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-[1.1]">
          Uncover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Truth Within</span>.
        </h1>
        <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
          Testhacolic is the world's most advanced psychological diagnostic engine. Take a deep dive into your personality, logic, and beliefs.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-3xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-slate-900 rounded-[2rem] border border-white/10 p-2 shadow-2xl">
            <div className="pl-6 pr-4">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text"
              placeholder="Search tests (philosophy, orientation, politics...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 bg-transparent text-white placeholder-slate-500 focus:outline-none font-medium"
            />
          </div>
        </div>
      </section>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuizzes.map((quiz) => (
          <QuizCard 
            key={quiz.id} 
            quiz={quiz} 
            completed={completedIds.includes(quiz.id)} 
          />
        ))}
        {filteredQuizzes.length === 0 && (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="text-4xl">🔎</div>
            <h3 className="text-xl font-bold text-white">No tests match your search</h3>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-indigo-400 font-bold hover:underline"
            >
              Clear filter and view all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

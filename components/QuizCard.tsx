
import React from 'react';
import { QuizData } from '../types';

interface QuizCardProps {
  quiz: QuizData;
  completed?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, completed }) => {
  const isRate = quiz.type === 'rate';
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `/quiz/${quiz.id}`;
  };
  
  return (
    <a 
      href={`#/quiz/${quiz.id}`}
      onClick={handleClick}
      className="group block bg-slate-800/40 hover:bg-slate-800/60 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={quiz.thumbnail} 
          alt={quiz.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg backdrop-blur-md ${
            isRate 
              ? 'bg-amber-500/80 text-white' 
              : 'bg-indigo-500/80 text-white'
          }`}>
            {isRate ? 'Intensity Meter' : 'Identity Profile'}
          </span>
        </div>
        
        {completed && (
          <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-[2px] flex items-center justify-center">
            <div className="bg-white text-indigo-900 px-6 py-2 rounded-full text-sm font-black shadow-2xl transform -rotate-2">
              COMPLETED ✓
            </div>
          </div>
        )}
      </div>
      
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
          {quiz.title.replace(/_/g, ' ')}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {quiz.description}
        </p>
        
        <div className="pt-4 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
            Start Test →
          </span>
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700"></div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

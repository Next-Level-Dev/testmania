
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '/';
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      <header className="glass sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#/" onClick={goHome} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">TH</span>
            </div>
            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-indigo-400 transition-all">
              Testhacolic
            </span>
          </a>
          
          <nav className="flex items-center space-x-8">
            <a href="#/" onClick={goHome} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Tests
            </a>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
            <div className="hidden md:flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Cloud Engine Ready</span>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow w-full py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 bg-slate-950/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black tracking-tighter text-slate-400">Testhacolic</span>
          </div>
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} IDENTITY_LABS.v1
          </p>
        </div>
      </footer>
    </div>
  );
};

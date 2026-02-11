
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { QuizPage } from './views/QuizPage';

const App: React.FC = () => {
  const [route, setRoute] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderRoute = () => {
    // Normalize the route:
    // 1. Split by '?' to remove any query parameters added by browsers/webviews
    // 2. Remove trailing slashes
    let cleanRoute = route.split('?')[0].replace(/\/$/, '');

    // Handle root paths
    if (cleanRoute === '' || cleanRoute === '#' || cleanRoute === '#/') {
      return <Home />;
    }

    // Match quiz route
    const quizMatch = cleanRoute.match(/^#\/quiz\/(.+)$/);
    if (quizMatch) {
      return <QuizPage quizId={quizMatch[1]} />;
    }

    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-slate-500 mt-2">The page you're looking for doesn't exist.</p>
        <a href="#/" className="text-indigo-600 mt-4 inline-block font-bold">Go Home</a>
      </div>
    );
  };

  return (
    <Layout>
      {renderRoute()}
    </Layout>
  );
};

export default App;

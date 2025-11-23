import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
const ExhibitionsPage = lazy(() => import('./components/ExhibitionsPage').then(m => ({ default: m.ExhibitionsPage })));
const ExhibitionDetail = lazy(() => import('./components/ExhibitionDetail').then(m => ({ default: m.ExhibitionDetail })));
const VisitPage = lazy(() => import('./components/VisitPage').then(m => ({ default: m.VisitPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
      <Suspense fallback={<div style={{ padding: 24 }}>Chargement…</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Show the carousel page immediately at root / */}
            <Route index element={<HomePage />} />
            <Route path="exhibitions" element={<ExhibitionsPage />} />
            <Route path="exhibitions/:id" element={<ExhibitionDetail />} />
            <Route path="visit" element={<VisitPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

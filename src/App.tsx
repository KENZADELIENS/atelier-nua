import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ExhibitionsPage } from './components/ExhibitionsPage';
import { VisitPage } from './components/VisitPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  return (
    <BrowserRouter basename="/atelier-nua">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Show the carousel page immediately at root / */}
          <Route index element={<HomePage />} />
          <Route path="exhibitions" element={<ExhibitionsPage />} />
          <Route path="visit" element={<VisitPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ExhibitionsPage } from './components/ExhibitionsPage';
import { ExhibitionDetail } from './components/ExhibitionDetail';
import { VisitPage } from './components/VisitPage';
import { AboutPage } from './components/AboutPage';

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={basename}>
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
    </BrowserRouter>
  );
}

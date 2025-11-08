import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ExhibitionsPage } from './components/ExhibitionsPage';
import { VisitPage } from './components/VisitPage';
import { AboutPage } from './components/AboutPage';
import { HubPage } from './components/HubPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/hub" replace />} />
          <Route path="hub" element={<HubPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="exhibitions" element={<ExhibitionsPage />} />
          <Route path="visit" element={<VisitPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

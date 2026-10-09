import { Route, Routes, useLocation } from 'react-router'
import { Footer, Nav, NextPage, ScrollToTop } from './components'
import {
  AboutPage,
  AcademicPage,
  ArtsPage,
  CancerPublicHealthPage,
  ContactPage,
  GalleryPage,
  HomePage,
  HpvPage,
  MediaPage,
  NotFoundPage,
  PublicationsPage,
  ResearchPage,
  SaharaPage,
  SurakshaPage,
  TechPage,
} from './pages'
import { useReveal } from './useReveal'
import './App.css'

export default function App() {
  const { pathname } = useLocation()
  useReveal()
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/cancer-public-health" element={<CancerPublicHealthPage />} />
          <Route path="/suraksha-in-pink" element={<SurakshaPage />} />
          <Route path="/sahara-kit" element={<SaharaPage />} />
          <Route path="/hpv-cancer-prevention" element={<HpvPage />} />
          <Route path="/technology-innovation" element={<TechPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/academic-journey" element={<AcademicPage />} />
          <Route path="/arts-leadership" element={<ArtsPage />} />
          <Route path="/media-recognition" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NextPage />
      </main>
      <Footer />
    </>
  )
}

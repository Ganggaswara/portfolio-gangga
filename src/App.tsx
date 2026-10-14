import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AdminLayout } from './components/AdminLayout';
import { PublicLayout } from './components/PublicLayout';
import { Home } from './pages/Home';
import { BlogPage } from './pages/BlogPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ThanksPage } from './pages/ThanksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/admin/LoginPage';
import { DashboardPage } from './pages/admin/DashboardPage';
import { ProfileAdminPage } from './pages/admin/ProfileAdminPage';
import { EducationAdminPage } from './pages/admin/EducationAdminPage';
import { ExperienceAdminPage } from './pages/admin/ExperienceAdminPage';
import { ProjectsAdminPage } from './pages/admin/ProjectsAdminPage';
import { SkillsAdminPage } from './pages/admin/SkillsAdminPage';
import { TestimonialsAdminPage } from './pages/admin/TestimonialsAdminPage';
import { CvAdminPage } from './pages/admin/CvAdminPage';
import { SettingsAdminPage } from './pages/admin/SettingsAdminPage';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="thanks" element={<ThanksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfileAdminPage />} />
          <Route path="education" element={<EducationAdminPage />} />
          <Route path="experience" element={<ExperienceAdminPage />} />
          <Route path="projects" element={<ProjectsAdminPage />} />
          <Route path="skills" element={<SkillsAdminPage />} />
          <Route path="testimonials" element={<TestimonialsAdminPage />} />
          <Route path="cv" element={<CvAdminPage />} />
          <Route path="settings" element={<SettingsAdminPage />} />
        </Route>
      </Routes>
    </>
  );
}

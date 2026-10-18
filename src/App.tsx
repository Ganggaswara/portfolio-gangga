import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { PageLoader } from './components/PageLoader';
import { PublicLayout } from './components/PublicLayout';
import { Home } from './pages/Home';

const AdminLayout = lazy(() => import('./components/AdminLayout').then((m) => ({ default: m.AdminLayout })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ThanksPage = lazy(() => import('./pages/ThanksPage').then((m) => ({ default: m.ThanksPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const LoginPage = lazy(() => import('./pages/admin/LoginPage').then((m) => ({ default: m.LoginPage })));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const ProfileAdminPage = lazy(() => import('./pages/admin/ProfileAdminPage').then((m) => ({ default: m.ProfileAdminPage })));
const EducationAdminPage = lazy(() => import('./pages/admin/EducationAdminPage').then((m) => ({ default: m.EducationAdminPage })));
const ExperienceAdminPage = lazy(() => import('./pages/admin/ExperienceAdminPage').then((m) => ({ default: m.ExperienceAdminPage })));
const ProjectsAdminPage = lazy(() => import('./pages/admin/ProjectsAdminPage').then((m) => ({ default: m.ProjectsAdminPage })));
const SkillsAdminPage = lazy(() => import('./pages/admin/SkillsAdminPage').then((m) => ({ default: m.SkillsAdminPage })));
const TestimonialsAdminPage = lazy(() => import('./pages/admin/TestimonialsAdminPage').then((m) => ({ default: m.TestimonialsAdminPage })));
const CvAdminPage = lazy(() => import('./pages/admin/CvAdminPage').then((m) => ({ default: m.CvAdminPage })));
const SettingsAdminPage = lazy(() => import('./pages/admin/SettingsAdminPage').then((m) => ({ default: m.SettingsAdminPage })));

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

function GAPageview() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname.startsWith('/admin')) return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.('event', 'page_view', { page_path: pathname + hash });
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
      <PageLoader />
      <ScrollManager />
      <GAPageview />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="services" element={<ServicesPage />} />
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
      </Suspense>
    </>
  );
}

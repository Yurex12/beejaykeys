import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import DashboardLayout from "./layout/DashboardLayout";

import {
  AboutPage,
  AdminProjectsPage,
  ContactPage,
  HomePage,
  LoginPage,
  OverviewPage,
  PortfolioPage,
  ProjectDetailsPage,
  AdminFaqsPage,
  AdminLinkPage,
  AdminTestimonialsPage,
  AdminServicesPage,
  MessagesPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="contact-me" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="/portfolio/projects/:projectId"
            element={<ProjectDetailsPage />}
          />
        </Route>
        <Route path="login" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>
          <Route
            path="dashboard"
            element={<Navigate replace to="/dashboard/overview" />}
          />
          <Route path="dashboard/overview" element={<OverviewPage />} />
          <Route path="dashboard/projects" element={<AdminProjectsPage />} />
          <Route path="dashboard/faqs" element={<AdminFaqsPage />} />
          <Route path="dashboard/links" element={<AdminLinkPage />} />
          <Route
            path="dashboard/testimonials"
            element={<AdminTestimonialsPage />}
          />
          <Route path="dashboard/services" element={<AdminServicesPage />} />
          <Route path="dashboard/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

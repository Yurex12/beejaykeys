import { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";

import AppLayout from "./layout/AppLayout";
import DashboardLayout from "./layout/DashboardLayout";

import {
  AboutPage,
  AdminFaqsPage,
  AdminLinkPage,
  AdminMessagesPage,
  AdminProjectDetailsPage,
  AdminProjectsPage,
  AdminServicesPage,
  AdminTestimonialsPage,
  ContactPage,
  HomePage,
  LoginPage,
  OverviewPage,
  PortfolioPage,
  ProjectDetailsPage,
  UserSettingsPage,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

import { useUpdateStats } from "./hooks/useUpdateStats.ts";
import { HiArrowUp } from "react-icons/hi";
import ScrollPageToTop from "./components/ScrollPageToTop.tsx";
import NotFound from "./components/NotFound.tsx";

function App() {
  const { updateStats } = useUpdateStats();

  useEffect(() => {
    updateStats();
  }, []);

  return (
    <>
      <Toaster
        gutter={12}
        position="top-center"
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "10px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />

      <ScrollToTop
        smooth
        component={<HiArrowUp className="text-black" />}
        className="bottom-20 flex h-10 w-8 items-center justify-center rounded-lg shadow"
      />

      <ScrollPageToTop />
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

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<Navigate replace to="/dashboard/overview" />}
          />
          <Route path="dashboard/overview" element={<OverviewPage />} />
          <Route path="dashboard/projects" element={<AdminProjectsPage />} />
          <Route
            path="dashboard/projects/form"
            element={<AdminProjectDetailsPage />}
          />
          <Route path="dashboard/faqs" element={<AdminFaqsPage />} />
          <Route path="dashboard/links" element={<AdminLinkPage />} />
          <Route
            path="dashboard/testimonials"
            element={<AdminTestimonialsPage />}
          />
          <Route path="dashboard/services" element={<AdminServicesPage />} />
          <Route path="dashboard/messages" element={<AdminMessagesPage />} />
          <Route path="dashboard/user" element={<UserSettingsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

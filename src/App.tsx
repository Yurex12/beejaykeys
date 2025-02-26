import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import DashboardLayout from "./layout/DashboardLayout";

import { Toaster } from "react-hot-toast";

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

import { AuthProvider } from "./contexts/authContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

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

      <AuthProvider>
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
              <Route
                path="dashboard/projects"
                element={<AdminProjectsPage />}
              />
              <Route path="dashboard/faqs" element={<AdminFaqsPage />} />
              <Route path="dashboard/links" element={<AdminLinkPage />} />
              <Route
                path="dashboard/testimonials"
                element={<AdminTestimonialsPage />}
              />
              <Route
                path="dashboard/services"
                element={<AdminServicesPage />}
              />
              <Route path="dashboard/messages" element={<MessagesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

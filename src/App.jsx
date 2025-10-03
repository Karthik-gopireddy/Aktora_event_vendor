import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

// Public Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Services from "./pages/dashboard/Services.jsx";
import CreateService from "./pages/dashboard/CreateService.jsx";

import NotFound from "./pages/NotFound.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import Footer from "./components/Footer.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="RegisterPage" element={<RegisterPage/>}/>
              <Route path="about" element={<About />} />
              <Route path="service" element={<ServicePage/>}/>
              <Route path="contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Route>
            
            {/* Login Route (no layout) */}
            
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
               </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="services" element={<Services />} />
              <Route path="create-service" element={<CreateService />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

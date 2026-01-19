
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/admin', element: <Admin /> },
  { path: '*', element: <NotFound /> },
], {
  future: { v7_startTransition: true, v7_relativeSplatPath: true },
});

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

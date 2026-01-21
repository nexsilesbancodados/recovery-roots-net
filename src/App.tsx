import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ApoioFamilia from "./pages/ApoioFamilia";
import UTI from "./pages/UTI";
import Desintoxicacao from "./pages/Desintoxicacao";
import SobreNos from "./pages/SobreNos";
import ComoFunciona from "./pages/ComoFunciona";
import Convenios from "./pages/Convenios";
import Resgate from "./pages/Resgate";
import Equipe from "./pages/Equipe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apoio-familia" element={<ApoioFamilia />} />
          <Route path="/uti" element={<UTI />} />
          <Route path="/desintoxicacao" element={<Desintoxicacao />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route path="/resgate" element={<Resgate />} />
          <Route path="/equipe" element={<Equipe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

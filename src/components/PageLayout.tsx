import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EmergencyBar from "@/components/EmergencyBar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      
      {/* Simple Header for Internal Pages */}
      <header className="fixed top-10 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-28">
        {children}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PageLayout;

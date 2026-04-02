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
      <div className="bg-background border-b border-border/30">
        <div className="container mx-auto px-4 py-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <main>
        {children}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PageLayout;

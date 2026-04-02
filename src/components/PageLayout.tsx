import { ReactNode } from "react";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBar />
      <Navbar />

      {/* Page Content */}
      <main className="pt-4">
        {children}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PageLayout;

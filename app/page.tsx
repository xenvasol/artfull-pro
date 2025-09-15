import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import ProjectShowcase from "@/components/project-showcase";
import EnhancedReviews from "@/components/enhanced-reviews";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProjectShowcase />
        <EnhancedReviews />
      </main>
      <Footer />
    </div>
  );
}

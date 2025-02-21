import Hero from "@/features/homepage/components/Hero";
import BrandWorkFlow from "@/features/homepage/components/BrandWorkFlow";
import BrandServices from "@/features/homepage/components/BrandServices";
import KeyMetricsImpact from "@/features/homepage/components/KeyMetricsImpact";
import NotableWorks from "@/features/homepage/components/NotableWorks";
import HireMe from "@/features/homepage/components/HireMe";
import Testimonials from "@/features/homepage/components/Testimonials";

function HomePage() {
  return (
    <>
      <Hero />
      <BrandWorkFlow />
      <BrandServices />
      <KeyMetricsImpact />
      <NotableWorks />
      <HireMe />
      <Testimonials />
    </>
  );
}

export default HomePage;

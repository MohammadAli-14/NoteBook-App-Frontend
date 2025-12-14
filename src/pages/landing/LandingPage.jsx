import { Link } from "react-router";
import Header from "../../components/landing/Header";
import Features from "../../components/landing/Features";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Header />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
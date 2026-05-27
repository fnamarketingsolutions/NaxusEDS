import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Loader */
const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    </div>
  );
};

/* Scroll + Loader Wrapper */
const ScrollToTopAndLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <PageLoader />;
  }

  return children;
};

/* Pages */
import HeroSection from "./pages/homePages/HeroSection";
import StructuralDesign from "./pages/engineeringServices/structuralDesign/StructuralDesign";
import CivilEngineering from "./pages/engineeringServices/civilEngineeringPages/CivilEngineering";
import MepHero from "./pages/engineeringServices/mepServicesPages/MepHero";
import PoolEngineeringHero from "./pages/engineeringServices/poolServices/PoolEngineeringHero";
import ArchitecturalHero from "./pages/architecturalServices/architectural/ArchitecturalHero";
import FacadeBuildingHero from "./pages/architecturalServices/fecadeBuildings/FacadeHero";
import VisualizationHero from "./pages/architecturalServices/visualization/VisualizationHero";
import ArchitecturalBIMHero from "./pages/BIMservices/architecturalBIM/ArchitecturalBIMHero";
import StructuralBIMHero from "./pages/BIMservices/structuralBIMServices/StructuralBIMHero";
import MepBimHero from "./pages/BIMservices/mepServices/MepBimHero";
import ClashDetectionHero from "./pages/BIMservices/cashDetection/ClashDetectionHero";
import BIMCoordinationHero from "./pages/BIMservices/bimCordination/BIMCoordinationHero";
import CADToBIMHero from "./pages/BIMservices/CADtoBIM/CADToBIMHero";
import RevitFamilyHero from "./pages/BIMservices/revitFamilyCreation/RevitFamilyHero";
import PointCloudHero from "./pages/BIMservices/pointCloudServices/PointCloudHero";
import ShopDrawingsHero from "./pages/BIMservices/acurateShopCreation/ShopDrawingsHero";
import RebarFabricationHero from "./pages/rebarFabrications/RebarFabricationHero";
import LightGuage from "./pages/lightGuageSteel/LightGuageHero";
import ContactHero from "./pages/contactPage/ContactHero";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsAndConditions from "./pages/policies/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <ScrollToTopAndLoader>
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/mep-service" element={<MepHero />} />
          <Route path="/pool-engineering" element={<PoolEngineeringHero />} />

          <Route path="/architectural" element={<ArchitecturalHero />} />
          <Route path="/facade-building" element={<FacadeBuildingHero />} />
          <Route path="/3d-visualization" element={<VisualizationHero />} />

          <Route
            path="/architectural-bim-services"
            element={<ArchitecturalBIMHero />}
          />

          <Route
            path="/structural-bim-services"
            element={<StructuralBIMHero />}
          />

          <Route path="/mep-bim-services" element={<MepBimHero />} />

          <Route
            path="/clash-detection-services"
            element={<ClashDetectionHero />}
          />

          <Route
            path="/bim-coordination-services"
            element={<BIMCoordinationHero />}
          />

          <Route
            path="/cad-to-bim-services"
            element={<CADToBIMHero />}
          />

          <Route
            path="/revit-family-creation-services"
            element={<RevitFamilyHero />}
          />

          <Route
            path="/point-cloud-services"
            element={<PointCloudHero />}
          />

          <Route
            path="/shop-drawings-services"
            element={<ShopDrawingsHero />}
          />

          <Route
            path="/rebar-fabrication-services"
            element={<RebarFabricationHero />}
          />

          <Route
            path="/light-gauge-steel-fabrication"
            element={<LightGuage />}
          />

          <Route path="/contact-us" element={<ContactHero />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>

        <Footer />
      </ScrollToTopAndLoader>
    </Router>
  );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/homePages/HeroSection";
import Footer from "./components/Footer";
import StructuralDesign from "./pages/engineeringServices/structuralDesign/StructuralDesign";
import CivilEngineering from "./pages/engineeringServices/civilEngineeringPages/CivilEngineering";
import MepHero from "./pages/engineeringServices/mepServicesPages/MepHero";
import PoolEngineeringHero from "./pages/engineeringServices/poolServices/PoolEngineeringHero";
import ArchitecturalHero from "./pages/architecturalServices/architectural/ArchitecturalHero";
import FacadeBuildingHero from "./pages/architecturalServices/fecadeBuildings/FacadeHero";
import VisualizationHero from "./pages/architecturalServices/visualization/VisualizationHero";
import ArchitecturalBIMHero from "./pages/BIMservices/architecturalBIM/ArchitecturalBIMHero";
import StructuralBIMHero from "./pages/BIMservices/structuralBIMServices/StructuralBIMHero";
import MepBIMHero from "./pages/BIMservices/mepServices/MEPBIMHero";
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
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/mep-service" element={<MepHero />} />

          <Route path="/pool-engineering" element={<PoolEngineeringHero />} />

          {/* architectural services */}
          <Route path="/architectural" element={<ArchitecturalHero />} />
          <Route path="/facade-building" element={<FacadeBuildingHero />} />
          <Route path="/3d-visualization" element={<VisualizationHero />} />

          <Route path="/architectural-bim-services" element={<ArchitecturalBIMHero />} />
          <Route path="/structural-bim-services" element={<StructuralBIMHero/>}/>
          <Route path="/mep-bim-services" element={<MepBIMHero/>}/>
          <Route path="/clash-detection-services" element={<ClashDetectionHero/>}/>
          <Route path="/bim-coordination-services" element={<BIMCoordinationHero/>}/>
          <Route path="/cad-to-bim-services" element={<CADToBIMHero/>}/>
          <Route path="/revit-family-creation-services" element={<RevitFamilyHero/>}/>
          <Route path="/point-cloud-services" element={<PointCloudHero/>}/>
          <Route path="/shop-drawings-services" element={<ShopDrawingsHero/>}/>
          <Route path="/rebar-fabrication-services" element={<RebarFabricationHero/>}/>

          <Route path="/light-gauge-steel-fabrication" element={<LightGuage/>}/>
          <Route path="/contact-us" element={<ContactHero/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer/> 
      </Router>
    </>
  );
};

export default App;

import { Presentation } from "@/components/Presentation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { TeamMembersSlide } from "@/components/slides/TeamMembersSlide";
import { TeamMembersSlide2 } from "@/components/slides/TeamMembersSlide2";
import { AboutJellyfishSlide } from "@/components/slides/AboutJellyfishSlide";
import { WhyStrongFitSlide } from "@/components/slides/WhyStrongFitSlide";
import { TechnicalCapabilitiesSlide } from "@/components/slides/TechnicalCapabilitiesSlide";
import { AIExpertiseSlide } from "@/components/slides/AIExpertiseSlide";
import { DeliveryModelSlide } from "@/components/slides/DeliveryModelSlide";
import { TPointTechSlide } from "@/components/slides/TPointTechSlide";
import { AIEntityExtractionSlide } from "@/components/slides/AIEntityExtractionSlide";
import { FMIFacilitySlide } from "@/components/slides/FMIFacilitySlide";
import { BespinLabsSlide } from "@/components/slides/BespinLabsSlide";
import { CaseStudyIntroSlide } from "@/components/slides/CaseStudyIntroSlide";
import { ProblemRequirementsSlide } from "@/components/slides/ProblemRequirementsSlide";
import { WhatWeBuiltSlide } from "@/components/slides/WhatWeBuiltSlide";
import { TechStackSlide } from "@/components/slides/TechStackSlide";
import { TeamStructureSlide } from "@/components/slides/TeamStructureSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { TimelinePhase2Slide } from "@/components/slides/TimelinePhase2Slide";
import { ThankYouSlide } from "@/components/slides/ThankYouSlide";

const Index = () => {
  const slides = [
    { id: 1, component: <TitleSlide /> },
    { id: 2, component: <TeamMembersSlide /> },
    { id: 3, component: <TeamMembersSlide2 /> },
    { id: 4, component: <AboutJellyfishSlide /> },
    { id: 5, component: <WhyStrongFitSlide /> },
    { id: 6, component: <TechnicalCapabilitiesSlide /> },
    { id: 7, component: <AIExpertiseSlide /> },
    { id: 8, component: <DeliveryModelSlide /> },
    { id: 9, component: <TPointTechSlide /> },
    { id: 10, component: <AIEntityExtractionSlide /> },
    { id: 11, component: <FMIFacilitySlide /> },
    { id: 12, component: <BespinLabsSlide /> },
    { id: 13, component: <CaseStudyIntroSlide /> },
    { id: 14, component: <ProblemRequirementsSlide /> },
    { id: 15, component: <WhatWeBuiltSlide /> },
    { id: 16, component: <TechStackSlide /> },
    { id: 17, component: <TeamStructureSlide /> },
    { id: 18, component: <TimelineSlide /> },
    { id: 19, component: <TimelinePhase2Slide /> },
    { id: 20, component: <ThankYouSlide /> },
  ];

  return <Presentation slides={slides} />;
};

export default Index;

import { SlideLayout } from "../SlideLayout";
import wguLogo from "@/assets/wgu-logo.png";
import jellyfishLogo from "@/assets/jellyfish-logo.png";

export const TitleSlide = () => {
  return (
    <SlideLayout className="bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="text-center text-primary-foreground space-y-8">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">
          WGU Skill Development Platform
        </h1>
        <h2 className="text-3xl font-light mb-12 animate-fade-in">
          Technical Presentation
        </h2>

        <div className="flex items-center justify-center gap-12 mb-8">
          <img
            src={wguLogo}
            alt="WGU"
            className="h-24 object-contain opacity-90"
          />
          <div className="h-20 w-px bg-primary-foreground/30" />
          <img
            src={jellyfishLogo}
            alt="Jellyfish Technologies"
            className="h-20 object-contain opacity-90"
          />
        </div>

        <div className="space-y-2 text-lg">
          <p>Presented by: Jellyfish Technologies</p>
          <p>Date: November 20, 2025</p>
        </div>
      </div>
    </SlideLayout>
  );
};

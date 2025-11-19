import { SlideLayout } from "../SlideLayout";
import wguLogo from "@/assets/wgu-logo.png";
import jellyfishLogo from "@/assets/jellyfish-logo.png";

export const ThankYouSlide = () => {
  return (
    <SlideLayout className="bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="text-center text-primary-foreground space-y-12">
        <h1 className="text-6xl font-bold mb-6">Thank You</h1>

        <div className="space-y-6 text-xl max-w-3xl mx-auto">
          <p className="leading-relaxed">
            We appreciate the opportunity and look forward to discussing your
            questions.
          </p>
          <p className="leading-relaxed font-semibold">
            Our team is confident, prepared, and deeply aligned with WGU's
            vision.
          </p>
        </div>

        <div className="flex items-center justify-center gap-12 my-12">
          <img
            src={wguLogo}
            alt="WGU"
            className="h-28 object-contain opacity-90"
          />
          <div className="h-24 w-px bg-primary-foreground/30" />
          <img
            src={jellyfishLogo}
            alt="Jellyfish Technologies"
            className="h-24 object-contain opacity-90"
          />
        </div>

        <div className="text-2xl font-light">
          <a
            href="https://www.jellyfishtechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors underline"
          >
            www.jellyfishtechnologies.com
          </a>
        </div>

        <div className="mt-12 text-lg opacity-80">
          Questions & Discussion
        </div>
      </div>
    </SlideLayout>
  );
};

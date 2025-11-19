import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";
import teamImage from "@/assets/JFT Team.jpeg";

export const AboutJellyfishSlide = () => {
  const specializations = [
    "AI-driven applications",
    "Large-scale SaaS platforms",
    "Custom product development",
    "Enterprise-grade integrations",
  ];

  const industries = [
    "Education & EdTech",
    "Healthcare",
    "Finance & Banking",
    "Insurance",
    "Retail & E-commerce",
    "Manufacturing & Industrial IoT",
  ];

  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Background Team Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={teamImage}
          alt="Jellyfish Technologies Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Original Content Structure */}
      <div className="relative h-full w-full">
        <SlideLayout title="About Jellyfish Technologies">
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-foreground">
              Jellyfish Technologies is a <strong>14+ year</strong> global
              engineering firm specializing in:
            </p>

            <div className="grid grid-cols-2 gap-4">
              {specializations.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 bg-white backdrop-blur-sm border-2 border-accent hover:shadow-xl transition-all shadow-lg"
                >
                  <p className="text-lg font-semibold text-foreground">
                    • {item}
                  </p>
                </Card>
              ))}
            </div>

            <div className="bg-white backdrop-blur-sm p-6 rounded-lg shadow-lg border-2">
              <p className="text-lg mb-4 text-foreground">
                We have delivered <strong>250+ products</strong>, supporting
                clients across the{" "}
                <strong>U.S., Canada, Europe, and APAC</strong> in industries
                including:
              </p>
              <div className="grid grid-cols-3 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="text-base text-primary font-semibold">
                    • {industry}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg italic text-foreground pt-4 bg-white backdrop-blur-sm p-6 rounded-lg shadow-lg border-2">
              Our approach combines deep technical capability, a strong
              architecture-first mindset, and a mature delivery model that
              ensures reliability, security, and scalability.
            </p>
          </div>
        </SlideLayout>
      </div>
    </div>
  );
};

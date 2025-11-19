import { SlideLayout } from "../SlideLayout";
import { Badge } from "@/components/ui/badge";

export const ProblemRequirementsSlide = () => {
  const tpointRequirements = [
    "Scalable platform for 200K+ monthly users",
    "Real-time code evaluation engine",
    "Multi-language content delivery",
    "Hands-on practice environments",
    "Tutorial and course management",
  ];

  const incontrolRequirements = [
    "School and university onboarding system",
    "Teacher assignment workflows",
    "Real-time class link generation",
    "Broadcast controls for synchronized learning",
    "Specialized education platform features",
  ];

  return (
    <SlideLayout
      title="The Challenge: Client Requirements"
      subtitle="What TPointTech and InControl needed when they approached us."
    >
      <div className="grid grid-cols-2 gap-8">
        {/* TPointTech Requirements */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>📚</span>
            <span>TPointTech</span>
          </h3>
          <div className="space-y-3">
            {tpointRequirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-card rounded-lg border border-l-4 border-l-accent hover:bg-accent/5 transition-colors"
              >
                <span className="text-accent text-lg">✓</span>
                <p className="text-sm">{requirement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* InControl Requirements */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>🎓</span>
            <span>InControl</span>
          </h3>
          <div className="space-y-3">
            {incontrolRequirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-card rounded-lg border border-l-4 border-l-accent hover:bg-accent/5 transition-colors"
              >
                <span className="text-accent text-lg">✓</span>
                <p className="text-sm">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TimelinePhase2Slide = () => {
  const phases = [
    {
      phase: "Phase 4",
      title: "Testing & Compliance",
      weeks: "Weeks 10–11",
      deliverables: [
        "Functional testing",
        "LLM response validation",
        "Accessibility tests (WCAG 2.1 AA)",
        "Performance testing (p95 < 3s)",
        "Security checks (vulnerability scan)",
        "UAT with WGU team",
      ],
    },
    {
      phase: "Phase 5",
      title: "Launch & Handover",
      weeks: "Week 12",
      deliverables: [
        "Deployed pilot environment",
        "Admin & instructor walkthrough",
        "Documentation package",
        "Support handover",
        "Monitoring dashboard",
      ],
    },
  ];

  return (
    <SlideLayout title="Expected Timeline (Continued)">
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent bg-gradient-to-r from-primary/5 to-accent/5 hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className="text-base px-4 py-1">{phase.phase}</Badge>
                  <CardTitle className="text-xl text-primary">
                    {phase.title}
                  </CardTitle>
                </div>
                <span className="text-sm font-semibold text-accent">
                  {phase.weeks}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                Deliverables:
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        <div className="text-center mt-12 p-6 bg-accent/10 rounded-lg">
          <p className="text-xl font-semibold text-primary">
            Total Timeline: 12 Weeks for Complete Pilot Delivery
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

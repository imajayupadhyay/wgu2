import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TimelineSlide = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Discovery & Architecture",
      weeks: "Weeks 1–2",
      deliverables: [
        "Finalized requirements & user flows",
        "LTI 1.3 integration design",
        "Multi-LLM routing framework design",
        "System architecture & data model",
        "Tenant strategy (for pilot)",
        "Compliance alignment document",
      ],
    },
    {
      phase: "Phase 2",
      title: "Core Development",
      weeks: "Weeks 3–6",
      deliverables: [
        "Student UI (Python module)",
        "AI task engine (prompt templates, scoring)",
        "Multi-LLM routing + caching",
        "Feedback generation pipeline",
        "Admin dashboard (student progress, attempts)",
        "Audit logging + token tracking",
        "Initial analytics API",
      ],
    },
    {
      phase: "Phase 3",
      title: "Integrations & Infrastructure",
      weeks: "Weeks 7–9",
      deliverables: [
        "LTI 1.3 (Advantage Services)",
        "SAML for admin (optional)",
        "REST API for data exports",
        "GraphQL endpoint (optional)",
        "Multi-tenancy foundation",
        "Observability: logs, metrics, alerts",
        "Auto-scaling infra + CDN setup",
      ],
    },
  ];

  return (
    <SlideLayout title="Expected Timeline for 3-Month Pilot">
      <div className="space-y-6">
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
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                Deliverables:
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
};

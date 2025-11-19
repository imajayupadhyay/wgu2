import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamStructureSlide = () => {
  const teams = [
    {
      title: "Project Leadership",
      roles: [
        "Technical Architect: Guides platform architecture, scalability, security",
        "Project Manager: Delivery timelines, communication, coordination",
      ],
    },
    {
      title: "AI/LLM Engineering",
      roles: [
        "AI/LLM Lead: Model selection, routing, scoring engine",
        "AI/LLM Engineer: Prompt frameworks, evaluator pipelines, fallback logic",
      ],
    },
    {
      title: "Backend Engineering",
      roles: [
        "Backend Lead",
        "Backend Developer(s)",
        "Responsible for APIs, microservices, LTI 1.3 Advantage, SAML, analytics, exports",
      ],
    },
    {
      title: "Frontend Engineering",
      roles: [
        "Frontend Lead",
        "Frontend Developer(s)",
        "Responsible for student & admin UI, WCAG, responsive design",
      ],
    },
    {
      title: "Quality Assurance",
      roles: ["QA Lead", "Manual & Automation Tester(s)"],
    },
    {
      title: "DevOps & Security",
      roles: [
        "DevOps & Security Engineer",
        "Responsible for deployment, auto-scaling, DR, encryption, monitoring",
      ],
    },
  ];

  return (
    <SlideLayout title="Team Structure for WGU Project">
      <div className="grid grid-cols-3 gap-6 h-full">
        {teams.map((team, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-shadow border-l-4 border-l-accent"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary">
                {team.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {team.roles.map((role, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{role}</span>
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

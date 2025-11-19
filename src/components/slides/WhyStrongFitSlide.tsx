import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const WhyStrongFitSlide = () => {
  const strengths = [
    {
      title: "Proven EdTech Platform Experience",
      highlights: [
        "TPointTech: 200K monthly users",
        "Real-time code evaluation",
        "InControl: School management",
        "Multi-language support",
      ],
      description:
        "Built and scaled platforms similar to WGU's requirements with coding assessments and institutional management.",
    },
    {
      title: "AI & Automation Capabilities",
      highlights: [
        "Multi-model LLM integration",
        "Document intelligence systems",
        "Chatbot & entity extraction",
        "Production-grade pipelines",
      ],
      description:
        "Delivered AI systems with evaluation, scoring, and automated feedback at scale.",
    },
    {
      title: "LMS Integration & EdTech Standards",
      highlights: [
        "LTI 1.3 Advantage",
        "SAML & OAuth SSO",
        "Canvas, Moodle integration",
        "Grade passback APIs",
      ],
      description:
        "Experience integrating with major LMS platforms using industry standards.",
    },
    {
      title: "Enterprise SaaS Architecture",
      highlights: [
        "Multi-tenant platforms",
        "FERPA compliance alignment",
        "Docker containerization",
        "Auto-scaling infrastructure",
      ],
      description:
        "Built secure, scalable SaaS platforms serving multiple institutions with data isolation.",
    },
  ];

  return (
    <SlideLayout title="Why We Are a Strong Fit for WGU">
      <p className="text-xl mb-8 text-foreground">
        We bring specialized strengths that align directly with WGU's
        expectations:
      </p>
      <div className="grid grid-cols-2 gap-5 h-full">
        {strengths.map((strength, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent hover:shadow-lg transition-shadow h-full flex flex-col"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary">
                {strength.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                {strength.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {strength.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
};

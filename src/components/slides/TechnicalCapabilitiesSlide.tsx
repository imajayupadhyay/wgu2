import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TechnicalCapabilitiesSlide = () => {
  const capabilities = [
    {
      title: "AI & LLM Engineering",
      items: [
        "Multi-model orchestration (GPT, Claude, Gemini, Llama)",
        "Real-time evaluation engines (text, code, structured responses)",
        "AI guardrails & safety layers",
        "Prompt frameworks & template banks",
        "A/B testing for LLM performance",
        "Token optimization & caching",
      ],
    },
    {
      title: "Backend & Architecture",
      items: [
        "Microservices & serverless architectures",
        "Multi-tenant SaaS with tenant isolation",
        "Scalable APIs (REST/GraphQL)",
        "Event-driven pipelines",
        "Observability (metrics, tracing, logs)",
        "Data lakes, warehouses & analytics systems",
      ],
    },
    {
      title: "Frontend Engineering",
      items: [
        "WCAG 2.1 AA compliant UI",
        "Responsive, mobile-first design",
        "Admin dashboards & reporting tools",
        "PWA capabilities",
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        "FERPA-aligned design",
        "SOC2/ISO 27001 inherited controls",
        "Encryption at rest & in transit",
        "Full audit logging",
        "Secure key management",
        "DR/BC frameworks (RTO <4h, RPO <60m)",
      ],
    },
  ];

  return (
    <SlideLayout title="Technical Capabilities">
      <div className="grid grid-cols-2 gap-5 h-full">
        {capabilities.map((capability, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent bg-gradient-to-br from-card to-muted/20 hover:shadow-lg transition-shadow h-full flex flex-col"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <span className="text-accent text-xl">⚙</span>
                {capability.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-1.5">
                {capability.items.map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span className="leading-tight">{item}</span>
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

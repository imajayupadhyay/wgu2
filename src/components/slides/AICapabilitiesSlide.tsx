import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AICapabilitiesSlide = () => {
  const capabilities = [
    {
      title: "Multi-Model Routing",
      description:
        "Dynamically switch between GPT-4, Claude, Gemini based on cost, latency, or task nature",
      icon: "🔄",
    },
    {
      title: "Fallback & Recovery",
      description:
        "Self-healing retry logic, secondary/tertiary model fallback, token-based throttling",
      icon: "🛡️",
    },
    {
      title: "Guardrails",
      description:
        "Prompt sanitization, sensitive content filtering, safety constraints, bias minimization",
      icon: "🔒",
    },
    {
      title: "Scoring & Evaluation",
      description:
        'Structured evaluation rubric, accuracy & completeness checks, step-by-step feedback generation, "Next step" recommendations',
      icon: "📊",
    },
  ];

  return (
    <SlideLayout title="AI/LLM Capabilities Deep Dive">
      <p className="text-xl mb-8">
        We built robust AI capabilities, including:
      </p>
      <div className="grid grid-cols-2 gap-8">
        {capabilities.map((capability, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 hover:shadow-xl transition-all"
          >
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="text-4xl">{capability.icon}</span>
                <span className="text-primary">{capability.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground">
                {capability.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
};

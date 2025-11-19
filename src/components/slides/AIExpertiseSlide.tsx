import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AIExpertiseSlide = () => {
  const projects = [
    {
      title: "AI Chatbot for Customer Support",
      description: [
        "Custom conversational AI using LLMs",
        "Multi-turn dialog management",
        "Automated ticket generation",
        "Reduced human intervention by 70%",
      ],
    },
    {
      title: "AI Document Intelligence System",
      description: [
        "Intelligent extraction of tables, forms, structured fields",
        "Multi-step parsing pipelines",
        "Confidence scoring & verification",
        "Used in high-volume financial workflows",
      ],
    },
    {
      title: "AI Entity Extraction Platform",
      description: [
        "Large text corpus analysis",
        "Domain-specific entity tagging using hybrid models",
        "Deduplication & canonical form generation",
        "Delivered at enterprise scale",
      ],
    },
    {
      title: "AI Obstacle Detection & Track Monitoring",
      description: [
        "Real-time ML on video streams",
        "Safety-critical environment",
        "Accuracy-optimized models",
        "Edge + cloud hybrid deployment",
      ],
    },
  ];

  return (
    <SlideLayout title="Our AI & Automation Expertise">
      <p className="text-lg mb-6 text-foreground">
        We have successfully delivered production-grade AI systems similar to
        WGU's needs:
      </p>
      <div className="grid grid-cols-2 gap-5 h-full">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent hover:shadow-lg transition-shadow h-full flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                {index + 1}. {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.description.map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-base italic text-muted-foreground mt-8">
        Our ability to build AI systems that analyze input, make decisions,
        provide feedback, and scale reliably — the same workflow needed for
        WGU's AI-driven learning experience.
      </p>
    </SlideLayout>
  );
};

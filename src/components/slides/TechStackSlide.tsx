import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TechStackSlide = () => {
  const stack = [
    {
      icon: "🤖",
      title: "AI/LLM Layer",
      items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Llama"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      items: [
        "Node.js microservices",
        "Python execution engine",
        "Docker sandbox containers",
        "API Gateway",
      ],
    },
    {
      icon: "💻",
      title: "Frontend",
      items: [
        "React + Tailwind",
        "PWA capabilities",
        "WCAG 2.1 AA compliance",
      ],
    },
    {
      icon: "🗄️",
      title: "Data Layer",
      items: [
        "PostgreSQL",
        "Redis caching",
        "S3 storage",
        "CloudWatch + ELK logging",
      ],
    },
    {
      icon: "🚀",
      title: "DevOps",
      items: [
        "AWS EKS (Kubernetes) for auto-scaling",
        "CloudFront CDN",
        "Zero-downtime deployment",
        "Monitoring: Grafana + Prometheus",
      ],
    },
    {
      icon: "🔒",
      title: "Security",
      items: [
        "TLS 1.3",
        "Encrypted credentials",
        "RBAC",
        "Full audit logs",
        "Automated vulnerability scanning",
      ],
    },
  ];

  return (
    <SlideLayout title="Tech Stack">
      <div className="grid grid-cols-3 gap-6">
        {stack.map((tech, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-3xl">{tech.icon}</span>
                <span className="text-primary">{tech.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
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

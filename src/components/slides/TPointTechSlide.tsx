import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = ["SaaS", "AI", "Scalability & Security", "Support"];

export const TPointTechSlide = () => {
  return (
    <SlideLayout
      className="items-start justify-start overflow-y-auto"
      title="TPointTech – Scalable AI-Powered Learning Platform"
      subtitle="EdTech platform with 185K monthly active learners"
    >
      <div className="space-y-6 pb-24">
        <div className="flex flex-wrap gap-2">
          {pillars.map((pillar) => (
            <Badge
              key={pillar}
              variant="outline"
              className="border-accent/30 bg-accent/10 text-accent"
            >
              {pillar} ✓
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 space-y-5 border-muted">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Client Background
              </p>
              <p className="mt-2 text-base leading-relaxed">
                TPointTech is a global EdTech platform delivering coding, data science,
                cloud, and technical upskilling programs across 10+ countries with{" "}
                <span className="font-semibold text-primary">
                  185,000 monthly active learners
                </span>
                .
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                The Challenge
              </p>
              <ul className="mt-3 space-y-2 text-base">
                {[
                  "Move from static video courses to AI-driven, hands-on learning",
                  "Generate and evaluate tasks in Python, JavaScript, Java, and SQL",
                  "Provide instant AI feedback with near real-time responsiveness",
                  "Scale reliably to 20K–30K daily active users while securing data",
                  "Onboard multi-institution clients (B2B + universities)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 space-y-4 border border-accent/30 bg-accent/5">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Our Solution
            </p>
            <ul className="space-y-2 text-base">
              {[
                "Multi-LLM, multi-tenant SaaS platform with GPT-4, Claude, and Gemini routing",
                "Real-time scoring pipelines for coding and theory tasks",
                "Adaptive difficulty and personalized learning-path recommendations",
                "Role-based dashboards for students, instructors, and admins",
                "Centralized cohort analytics and monitoring",
                "WCAG 2.1 AA compliant, accessible UI",
                "CDN-backed global delivery for consistently low latency",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-6 border-primary/30 bg-primary/5">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Why This Matters for WGU
          </p>
          <ul className="space-y-2 text-base">
            {[
              "Delivered a large-scale, student-facing AI learning experience",
              "Operationalized multi-model LLM orchestration with real-time scoring & feedback",
              "Architected for 50K DAU readiness with institutional multi-tenancy",
              "Built comprehensive admin analytics and security-hardened SaaS controls",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-muted-foreground">
            This case mirrors the outcomes WGU expects in the AI skill development pilot.
          </p>
        </Card>
      </div>
    </SlideLayout>
  );
};

import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhatWeBuiltSlide = () => {
  const tpointDelivered = [
    "Scaled to 200K+ monthly active users",
    "Real-time code evaluation engine",
    "Multi-language content delivery",
    "Interactive code editor with syntax highlighting",
    "Hands-on practice environments",
    "Tutorial and course management system",
    "Performance analytics and progress tracking",
    "High-performance infrastructure at scale",
  ];

  const incontrolDelivered = [
    "University and school onboarding system",
    "Teacher assignment workflows",
    "Real-time class link generation",
    "Instant student join functionality",
    "Teacher-controlled broadcast pause",
    "Synchronized student experiences",
    "Real-time classroom management",
    "Institutional admin dashboards",
  ];

  return (
    <SlideLayout title="What We Delivered">
      <div className="grid grid-cols-2 gap-8 h-full">
        {/* TPointTech Deliverables */}
        <Card className="border-l-4 border-l-accent bg-gradient-to-br from-card to-accent/5 hover:shadow-lg transition-shadow flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <span>📚</span>
              <span>TPointTech Platform</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {tpointDelivered.map((item, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* InControl Deliverables */}
        <Card className="border-l-4 border-l-accent bg-gradient-to-br from-card to-accent/5 hover:shadow-lg transition-shadow flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <span>🎓</span>
              <span>InControl Platform</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {incontrolDelivered.map((item, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-accent text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
};

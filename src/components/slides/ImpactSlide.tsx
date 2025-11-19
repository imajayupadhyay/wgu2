import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ImpactSlide = () => {
  const impacts = [
    {
      title: "For Learners",
      icon: "🎓",
      color: "accent",
      benefits: [
        "Faster skill acquisition",
        "More practice attempts",
        "Consistent high-quality feedback",
        "Data-driven confidence building",
      ],
    },
    {
      title: "For Instructors",
      icon: "👨‍🏫",
      color: "primary",
      benefits: [
        "Automated scoring",
        "Faster grading cycles",
        "Cohort insights",
        "Early student intervention signals",
      ],
    },
    {
      title: "For WGU",
      icon: "🚀",
      color: "secondary",
      benefits: [
        "Higher student engagement & course completion",
        "Reduced cost of manual Python grading",
        "Differentiated AI-powered learning experience",
        "Scalable platform for growing enrollment",
      ],
    },
  ];

  return (
    <SlideLayout title="Impact">
      <div className="grid grid-cols-3 gap-8">
        {impacts.map((impact, index) => (
          <Card
            key={index}
            className="border-l-4 border-l-accent bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all"
          >
            <CardHeader className="text-center">
              <div className="text-6xl mb-3">{impact.icon}</div>
              <CardTitle className="text-2xl text-primary">
                {impact.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {impact.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span className="text-base">{benefit}</span>
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

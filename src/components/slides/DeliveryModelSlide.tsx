import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DeliveryModelSlide = () => {
  return (
    <SlideLayout title="Our Delivery Model">
      <div className="grid grid-cols-2 gap-8">
        <Card className="border-l-4 border-l-accent bg-primary/5 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">How We Work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Agile – 2-week sprints",
                "Architecture-first development",
                "Transparent weekly reporting",
                "Frequent demos & checkpoints",
                "CI/CD-driven delivery",
                "Zero-downtime deploys",
                "Collaborative decision-making with client teams",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent bg-accent/5 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">
              Why It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Predictable delivery",
                "Early risk identification",
                "Fast iterations",
                "Continuous improvement",
                "High alignment with client expectations",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SlideLayout>
  );
};

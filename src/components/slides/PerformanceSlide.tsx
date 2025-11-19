import { SlideLayout } from "../SlideLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PerformanceSlide = () => {
  const performanceMetrics = [
    { label: "Monthly Active Users", value: "185K" },
    { label: "Daily Active Learners (Peak)", value: "20K-30K" },
    { label: "P95 Response Times", value: "< 3 seconds" },
    { label: "Uptime", value: "99.9%" },
    { label: "Multi-Region Delivery", value: "Global CDN" },
  ];

  const reliabilityFeatures = [
    "Automatic failover",
    "Intelligent load balancing",
    "Service-level throttling",
    "Predictive scaling based on usage patterns",
    "Auto-scaling during live bootcamps",
  ];

  return (
    <SlideLayout title="Scale, Performance & Reliability">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Delivered Performance:
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {performanceMetrics.map((metric, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-accent text-center bg-gradient-to-br from-accent/10 to-accent/5"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-accent">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Reliability Features:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {reliabilityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-accent p-4 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-base font-medium">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

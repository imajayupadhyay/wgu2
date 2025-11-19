import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";

export const CaseStudyIntroSlide = () => {
  return (
    <SlideLayout title="Proven EdTech Experience">
      <p className="text-xl mb-6 text-muted-foreground italic">
        Our track record with AI-powered learning platforms similar to WGU's vision
      </p>
      <div className="grid grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-accent p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-primary mb-4">
            📚 TPointTech Platform
          </h3>
          <div className="space-y-3">
            <p className="text-base">
              <strong className="text-accent">200,000+ monthly users</strong>
            </p>
            <p className="text-base leading-relaxed">
              Comprehensive technical training platform serving students and
              professionals globally with coding courses, tutorials, and hands-on
              practice environments.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                KEY ACHIEVEMENTS:
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Scaled to 200K+ monthly active learners</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Real-time code evaluation engine</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Multi-language support & content delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="border-l-4 border-l-accent p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-primary mb-4">
            🎓 InControl Learning Platform
          </h3>
          <div className="space-y-3">
            <p className="text-base">
              <strong className="text-accent">
                Specialized Education Platform
              </strong>
            </p>
            <p className="text-base leading-relaxed">
              AI-powered platform connecting universities and schools with courses
              for specially-abled children, featuring real-time classroom
              management and broadcast controls.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                KEY FEATURES:
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>School onboarding & teacher assignment system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Real-time class links with instant join</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Broadcast controls (pause syncs all students)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-5 bg-primary/5 border-primary/20">
        <p className="text-lg text-center">
          <strong className="text-primary">
            These experiences position us perfectly to deliver WGU's AI-powered
            Python assessment platform
          </strong>{" "}
          with the same scalability, reliability, and student-first approach.
        </p>
      </Card>
    </SlideLayout>
  );
};

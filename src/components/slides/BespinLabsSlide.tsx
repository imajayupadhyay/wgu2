import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = ["SaaS", "Scalability & Security", "Support", "AI (Light)"];

export const BespinLabsSlide = () => {
  return (
    <SlideLayout
      className="items-start justify-start overflow-y-auto"
      title="Bespin Labs (Patronum) – Enterprise SaaS for Google Workspace Automation"
      subtitle="Automation platform powering onboarding/offboarding at scale"
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
                Bespin Labs built Patronum, a widely adopted SaaS product that
                automates starter/leaver/mover workflows across Google Workspace for
                thousands of enterprise users.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                The Challenge
              </p>
              <ul className="mt-3 space-y-2 text-base">
                {[
                  "Automate repetitive IT provisioning tasks with absolute reliability",
                  "Securely manage thousands of Google Workspace identities",
                  "Integrate deeply with Google APIs for real-time sync",
                  "Manage SSO-based identity and granular permissions",
                  "Deliver enterprise-grade security, uptime, and support",
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
                "Golang-based backend optimized for predictable, high-volume workflows",
                "Real-time data updates with MongoDB and streaming sync jobs",
                "Deep Google API integration for groups, drives, contacts, and files",
                "Automated provisioning/deprovisioning and smart group management",
                "File-level permissions and enterprise-grade RBAC",
                "Scalable microservices delivering consistent performance worldwide",
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
              "Enterprise SaaS delivery with strong SSO/identity integrations (Google → SAML/LTI parity)",
              "Secure API-based integration patterns built for thousands of daily users",
              "Predictable, scalable workflows backed by ongoing support & maintenance",
              "Proves readiness for long-term SaaS operations demanded by WGU",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-muted-foreground">
            Patronum showcases the enterprise reliability and support posture required for WGU's platform.
          </p>
        </Card>
      </div>
    </SlideLayout>
  );
};

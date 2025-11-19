import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = ["SaaS", "Scalability & Security", "Support"];

export const FMIFacilitySlide = () => {
  return (
    <SlideLayout
      className="items-start justify-start overflow-y-auto"
      title="FMI Facility Management Platform – Enterprise-Scale SaaS with Deep Workflow Automation"
      subtitle="Process-heavy, multi-tenant field operations platform"
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
                FMI is a US-based multi-brand enterprise managing hundreds of
                facilities nationwide. They needed a comprehensive SaaS application to
                orchestrate work requests, technicians, vendors, estimates, invoices,
                and approval chains.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                The Challenge
              </p>
              <ul className="mt-3 space-y-2 text-base">
                {[
                  "Model Corporate → Brand → Site → Vendor → Technician hierarchies",
                  "Tame 30+ interconnected workflows with live status updates",
                  "Keep field technicians synced in low-connectivity scenarios",
                  "Integrate IVR-based check-in/out mechanisms",
                  "Maintain data accuracy, audit trails, RBAC, and secure access",
                  "Guarantee industry-level uptime and performance",
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
                "Multi-role workflow automation spanning seven user types",
                "Work orders, vendor assignment, approvals, and invoicing in one pane",
                "Technician task management flows with offline capability",
                "IVR integration for reliable attendance and SLA tracking",
                "Granular RBAC with large-scale notifications and reporting",
                "Auto-scaling, high-availability cloud infrastructure with full audit logs",
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
              "Proves our ability to support multi-role, secure workflows similar to student/instructor/admin models",
              "Confirms mastery of institutional hierarchies and multi-tenancy",
              "Delivers high-scale SaaS engineering with reliable support and SLAs",
              "Shows expertise in real-time interactions and complex, multi-step flows",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-muted-foreground">
            The FMI program reflects the same discipline WGU needs to run a secure, enterprise-grade platform.
          </p>
        </Card>
      </div>
    </SlideLayout>
  );
};

import { SlideLayout } from "../SlideLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = ["AI", "Scalability & Security", "Support"];

export const AIEntityExtractionSlide = () => {
  return (
    <SlideLayout
      className="items-start justify-start overflow-y-auto"
      title="AI Entity Extraction System – GenAI Pipeline for High-Accuracy Document Processing"
      subtitle="InsurTech-grade document automation with deterministic + LLM scoring"
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
                A leading InsurTech company processing thousands of structured and
                unstructured documents each day needed a faster, more accurate, GenAI
                entity extraction system.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                The Challenge
              </p>
              <ul className="mt-3 space-y-2 text-base">
                {[
                  "Support scanned PDFs and digital documents simultaneously",
                  "Fix poor accuracy from traditional encoder-only models",
                  "Eliminate months-long model training cycles",
                  "Enable real-time editing, validation, and compliance workflows",
                  "Operate inside a high-security, tightly governed environment",
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
                "Decoder-based LLMs for contextual extraction augmented with EasyOCR/zonal OCR",
                "One-click extraction reaching 98% accuracy",
                "Real-time human-in-the-loop editing UI tied to secure RBAC",
                "FastAPI backend enabling high-volume, parallel document processing",
                "Neo4j graph DB to map entity relationships and dependencies",
                "Single-document training capability to reduce tuning from months to minutes",
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
              "Demonstrates AI workflows that ingest user input with contextual evaluation pipelines",
              "Combines deterministic + LLM-based scoring with rapid feedback loops",
              "Implements role-based access control comparable to faculty/admin models",
              "Handles sensitive data securely with near real-time performance constraints",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-muted-foreground">
            These capabilities mirror WGU's needs for safe AI evaluation, scoring, and guardrails.
          </p>
        </Card>
      </div>
    </SlideLayout>
  );
};

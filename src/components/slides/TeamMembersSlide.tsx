import { SlideLayout } from "../SlideLayout";
import { Card, CardContent } from "@/components/ui/card";
import vivekImage from "@/assets/Vivek Sadh.png";
import akshayImage from "@/assets/Akshay.jpeg";
import abhinavImage from "@/assets/Abhinav.png";

export const TeamMembersSlide = () => {
  const teamMembers = [
    {
      name: "Vivek Sadh",
      role: "Technical Architect",
      experience: "15+ years",
      image: vivekImage,
      description:
        "Specializes in platform architecture, scalability strategy, multi-tenant design, and integration blueprints with 15+ years of experience.",
    },
    {
      name: "Akshay Sirsawar",
      role: "AI/LLM Lead",
      experience: "4+ years",
      image: akshayImage,
      description:
        "Expert in multi-model LLM routing, prompt framework design, AI guardrails implementation, and feedback engine development.",
    },
    {
      name: "Abhinav",
      role: "Backend Lead",
      experience: "8+ years",
      image: abhinavImage,
      description:
        "Focused on API development, microservices architecture, LTI 1.3 Advantage integration, and analytics pipeline implementation.",
    },
  ];

  return (
    <SlideLayout title="Key Team Members">
      <div className="h-full flex flex-col items-center justify-center px-8 py-6">
        <div className="grid grid-cols-3 gap-6 w-full h-full max-w-[98%]">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              {/* Image Section - Bigger */}
              <div className="relative h-[450px] bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-9xl font-bold text-primary/20">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <CardContent className="p-8 space-y-5">
                {/* Name & Role */}
                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {member.role} • {member.experience}
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

import { SlideLayout } from "../SlideLayout";
import { Card, CardContent } from "@/components/ui/card";
import ashishImage from "@/assets/Ashish.png";
import amanImage from "@/assets/Aman.png";
import prashantImage from "@/assets/Prashant.jpeg";

export const TeamMembersSlide2 = () => {
  const teamMembers = [
    {
      name: "Aman",
      role: "Frontend Lead",
      experience: "8+ years",
      image: amanImage,
      description:
        "Expert in building responsive student UI, admin interfaces, ensuring WCAG 2.1 AA compliance, and implementing PWA behaviors.",
    },
    {
      name: "Ashish Goel",
      role: "Project Manager",
      experience: "15+ years",
      image: ashishImage,
      description:
        "Leads delivery governance, sprint planning, stakeholder communication, timeline management, and risk mitigation with 15+ years of experience.",
    },
    {
      name: "Prashant Sharma",
      role: "QA Lead",
      experience: "8+ years",
      image: prashantImage,
      description:
        "Specializes in test strategy development, performance testing, accessibility verification, and release certification processes.",
    },
  ];

  return (
    <SlideLayout title="Key Team Members (Continued)">
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

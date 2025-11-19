import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const SlideLayout = ({
  children,
  className,
  title,
  subtitle,
}: SlideLayoutProps) => {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col items-center justify-center p-12",
        className
      )}
    >
      <div className="max-w-6xl w-full">
        {title && (
          <h1 className="text-5xl font-bold text-primary mb-4">{title}</h1>
        )}
        {subtitle && (
          <p className="text-2xl text-muted-foreground mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

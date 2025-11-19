import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import wguLogo from "@/assets/wgu-logo.png";
import jellyfishLogo from "@/assets/jellyfish-logo.png";

interface Slide {
  id: number;
  component: React.ReactNode;
}

interface PresentationProps {
  slides: Slide[];
}

export const Presentation = ({ slides }: PresentationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        previousSlide();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        exitFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isFullscreen]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Top Navigation Bar */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 z-20 bg-primary/95 backdrop-blur-sm transition-transform duration-300",
          !showNav && isFullscreen && "-translate-y-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <img src={wguLogo} alt="WGU" className="h-10 object-contain" />
            <div className="h-8 w-px bg-primary-foreground/20" />
            <img
              src={jellyfishLogo}
              alt="Jellyfish Technologies"
              className="h-10 object-contain"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-primary-foreground/80">
              {currentSlide + 1} / {slides.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            {isFullscreen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNav(!showNav)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Container */}
      <div className="w-full h-full pt-16">
        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-in-out",
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : currentSlide > index
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              )}
            >
              {slide.component}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-20 transition-transform duration-300",
          !showNav && isFullscreen && "translate-y-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-sm border-t">
          <Button
            variant="outline"
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      {!isFullscreen && (
        <div className="absolute bottom-20 right-6 text-xs text-muted-foreground">
          <p>← → Space: Navigate | F: Fullscreen | ESC: Exit</p>
        </div>
      )}
    </div>
  );
};

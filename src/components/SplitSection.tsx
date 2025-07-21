import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  title: string;
  description: string;
  image: string;
  href: string;
  gradient: "agent" | "flowise";
  className?: string;
}

export function SplitSection({ 
  title, 
  description, 
  image, 
  href, 
  gradient,
  className 
}: SplitSectionProps) {
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <Card 
      className={cn(
        "group relative h-full cursor-pointer overflow-hidden border-border/20 transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-2xl",
        gradient === "agent" && "bg-gradient-to-br from-primary/20 to-primary-glow/20",
        gradient === "flowise" && "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        className
      )}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
      
      <div className="relative h-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium">
            <span>Explore</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
}
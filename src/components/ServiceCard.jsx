import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServiceCard = ({ title, description, image, category, onLearnMore }) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-500 animate-fade-in-up">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" /> */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="py-6 px-3 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <button 
          
          className="w-full mt-4 bg-[#FFD700] py-2 rounded-xl text-black"
          onClick={onLearnMore}
        >
          Learn More
        </button>
      </div>
    </Card>
  );
};
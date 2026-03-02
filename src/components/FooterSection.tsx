import { Leaf } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-primary">
        <Leaf className="w-4 h-4" />
        <span className="font-display font-bold text-sm">The Green Path Project</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Smart Urban Tree Planning System — DIP & Environmental Engineering
      </p>
    </div>
  </footer>
);

export default FooterSection;

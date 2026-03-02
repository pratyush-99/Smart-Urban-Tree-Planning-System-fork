import { motion } from "framer-motion";
import { ArrowDown, Leaf, Thermometer } from "lucide-react";
import heroAerial from "@/assets/hero-aerial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroAerial}
          alt="Aerial view of urban heat zones and green canopy"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
              Urban Heat Island Mitigation
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            The Green
            <br />
            <span className="text-gradient-primary">Path</span> Project
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-body">
            A Smart Urban Tree Planning System that identifies gray zones in
            heat-stressed cities using aerial imagery and suggests optimal
            locations for tree plantation to mitigate the Urban Heat Island
            effect.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Stat
              icon={<Thermometer className="w-4 h-4" />}
              value="−3.5°C"
              label="Avg. Temp Reduction"
            />
            <Stat
              icon={<Leaf className="w-4 h-4" />}
              value="+28%"
              label="Green Canopy Increase"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3 bg-secondary/60 backdrop-blur-sm border border-border rounded-lg px-5 py-3">
    <div className="text-primary">{icon}</div>
    <div>
      <div className="font-display font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </div>
);

export default HeroSection;

import { motion } from "framer-motion";
import {
  TrendingUp,
  Thermometer,
  TreePine,
  Target,
  Gauge,
  Leaf,
} from "lucide-react";

const kpis = [
  {
    icon: <Leaf className="w-5 h-5" />,
    metric: "% Green Canopy Increase",
    target: "+15–30%",
    desc: "Ratio of canopy pixels before vs. after projected planting, per km².",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    metric: "Avg. LST Reduction",
    target: "−2 to −5°C",
    desc: "Predicted surface temperature drop in targeted gray zones post-canopy maturity.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    metric: "Segmentation Accuracy",
    target: ">92% mIoU",
    desc: "Mean Intersection over Union of the U-Net model on urban validation datasets.",
  },
  {
    icon: <TreePine className="w-5 h-5" />,
    metric: "Planting Viability Rate",
    target: ">85%",
    desc: "Percentage of recommended sites confirmed viable via ground-truth validation.",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    metric: "Processing Throughput",
    target: "<5 min/km²",
    desc: "End-to-end pipeline execution time from raw image to output map per square kilometer.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    metric: "Cooling Efficiency Index",
    target: "0.8–1.2 °C/ha",
    desc: "Temperature reduction per hectare of new canopy — measures cooling ROI per tree.",
  },
];

const MetricsSection = () => {
  return (
    <section className="py-24 relative" id="metrics">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            Success Metrics
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Key Performance Indicators
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Measurable outcomes to validate system effectiveness and
            environmental impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  {kpi.icon}
                </div>
                <span className="font-display text-2xl font-bold text-gradient-primary">
                  {kpi.target}
                </span>
              </div>
              <h3 className="font-display text-sm font-semibold mb-2">
                {kpi.metric}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {kpi.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;

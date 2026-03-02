import { motion } from "framer-motion";
import {
  Satellite,
  ScanLine,
  Brain,
  Map,
  TreePine,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: <Satellite className="w-5 h-5" />,
    title: "Image Acquisition",
    desc: "Capture high-resolution aerial & satellite imagery (Sentinel-2, Landsat 8) with multispectral and thermal infrared bands.",
  },
  {
    icon: <ScanLine className="w-5 h-5" />,
    title: "Pre-Processing",
    desc: "Apply atmospheric correction (DOS/FLAASH), noise reduction via Gaussian filtering, and radiometric calibration for consistent analysis.",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Segmentation",
    desc: "Semantic segmentation using U-Net architecture to classify pixels into Canopy, Buildings, Water, Pavement, and Bare Soil.",
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: "Feature Extraction",
    desc: "Identify planting-viable pixels by excluding active roads and buildings, targeting wide sidewalks, vacant lots, and parking areas.",
  },
  {
    icon: <TreePine className="w-5 h-5" />,
    title: "Heat Map Overlay",
    desc: "Overlay Landsat 8 thermal data (Band 10) with segmented maps to prioritize hottest gray zones for maximum cooling impact.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Predictive Modeling",
    desc: "Simulate 5–20 year canopy growth using allometric equations and estimate local surface temperature reduction per planted zone.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 relative" id="workflow">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            System Architecture
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            End-to-End Pipeline
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            From raw satellite capture to actionable tree-planting maps — a
            complete DIP workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {step.icon}
                </div>
                <span className="font-display text-xs text-muted-foreground tracking-widest">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

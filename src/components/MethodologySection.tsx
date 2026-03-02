import { motion } from "framer-motion";
import heatmapImg from "@/assets/heatmap-overlay.jpg";
import segmentationImg from "@/assets/segmentation-map.jpg";

const MethodologySection = () => {
  return (
    <section className="py-24 relative" id="methodology">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            DIP Methodology
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Core Processing Techniques
          </h2>
        </motion.div>

        {/* Segmentation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Semantic Segmentation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Using a U-Net encoder-decoder architecture trained on urban land-cover datasets, 
              the system classifies each pixel into five categories: <strong className="text-foreground">Canopy</strong>,{" "}
              <strong className="text-foreground">Buildings</strong>,{" "}
              <strong className="text-foreground">Water</strong>,{" "}
              <strong className="text-foreground">Pavement</strong>, and{" "}
              <strong className="text-foreground">Bare Soil</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Color-based segmentation in HSV space provides a fast initial pass, while the deep 
              learning model refines boundaries with sub-meter accuracy. NDVI (Normalized Difference 
              Vegetation Index) from near-infrared bands further validates canopy detection.
            </p>
            <div className="flex gap-3 flex-wrap">
              {["U-Net", "NDVI", "HSV Color Space", "ResNet Backbone"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <img
                src={segmentationImg}
                alt="Semantic segmentation map showing urban land cover classification"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 shadow-card">
              <span className="text-xs text-muted-foreground font-display">Classification Output</span>
            </div>
          </motion.div>
        </div>

        {/* Heat Map */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <img
                src={heatmapImg}
                alt="Thermal infrared heat map overlay of urban area"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg px-4 py-2 shadow-card">
              <span className="text-xs text-muted-foreground font-display">Landsat 8 Thermal Band</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Heat Mapping Integration
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Landsat 8 TIRS Band 10 (10.6–11.19 μm) provides Land Surface Temperature (LST) 
              at 100m resolution. The thermal data is resampled and co-registered with the 
              high-res segmentation mask using bilinear interpolation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A composite priority score is computed for each planting-viable pixel: zones with 
              higher LST and lower existing canopy density receive the highest priority. This 
              ensures maximum cooling impact per planted tree.
            </p>

            <div className="bg-secondary/60 border border-border rounded-lg p-4">
              <code className="text-xs text-primary font-mono">
                Priority = w₁ × LST_norm + w₂ × (1 − NDVI) + w₃ × Viable_mask
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                Weighted composite scoring for planting prioritization
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

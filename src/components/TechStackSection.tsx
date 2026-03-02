import { motion } from "framer-motion";

const categories = [
  {
    title: "Image Processing",
    items: [
      {
        name: "OpenCV",
        desc: "Core DIP operations, filtering, morphological transforms",
      },
      {
        name: "Rasterio",
        desc: "Geospatial raster I/O for satellite imagery (GeoTIFF)",
      },
      {
        name: "scikit-image",
        desc: "Advanced segmentation and feature extraction",
      },
    ],
  },
  {
    title: "Deep Learning",
    items: [
      {
        name: "TensorFlow / Keras",
        desc: "U-Net semantic segmentation model training",
      },
      {
        name: "PyTorch",
        desc: "Alternative framework with torchvision transforms",
      },
      {
        name: "ONNX Runtime",
        desc: "Optimized inference for production deployment",
      },
    ],
  },
  {
    title: "Geospatial & Data",
    items: [
      {
        name: "Google Earth Engine",
        desc: "Cloud-based satellite data processing at scale",
      },
      { name: "GeoPandas", desc: "Spatial data manipulation and analysis" },
      {
        name: "Sentinel-2 / Landsat 8",
        desc: "Primary multispectral & thermal data sources",
      },
    ],
  },
  {
    title: "Visualization & Output",
    items: [
      {
        name: "Folium / Leaflet",
        desc: "Interactive web maps for planting recommendations",
      },
      {
        name: "Matplotlib",
        desc: "Scientific plotting and analysis visualization",
      },
      { name: "QGIS", desc: "Professional GIS validation and map composition" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative" id="tech-stack">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.2em] uppercase">
            Technical Stack
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Recommended Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-5 text-primary">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <div className="w-1 rounded-full bg-primary/30 flex-shrink-0" />
                    <div>
                      <div className="font-display text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

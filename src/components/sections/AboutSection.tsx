import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code is my passion.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every aspect for lightning-fast load times and smooth interactions.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Always exploring new technologies and pushing creative boundaries.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm an aspiring Cloud Security & Cyber Security Engineer passionate about protecting digital infrastructure and building secure systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-semibold mb-4 relative">My Journey</h3>
              <p className="text-muted-foreground relative leading-relaxed">
                Started coding at 15, I fell in love with the power of creating things from nothing. From building my
                first website to architecting enterprise-scale applications, every project has been a new adventure in
                learning and growth.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-semibold mb-4 relative">My Philosophy</h3>
              <p className="text-muted-foreground relative leading-relaxed">
                I believe great software is invisible—it just works. My approach combines technical excellence with
                human-centered design, ensuring every product I build delights users while solving real problems.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] transition-shadow duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

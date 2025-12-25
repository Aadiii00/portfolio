import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Bug, Youtube, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Secure Coding",
    description: "Developing clean, secure, and maintainable code by following best practices, proper input validation, and secure programming principles.",
  },
  {
    icon: Bug,
    title: "Cybersecurity & Penetration Testing",
    description: "Learning and practicing ethical hacking techniques, vulnerability assessment, and security testing to understand real-world threats and defensive strategies.",
  },
  {
    icon: Youtube,
    title: "YouTube Channel Management",
    description: "Managing YouTube accounts with a focus on channel optimization, analytics, policy compliance, and audience growth, ensuring stable and guideline-compliant performance.",
  },
  {
    icon: TrendingUp,
    title: "YouTube Monetization & Growth Strategy",
    description: "Supporting channels in achieving monetization and revenue growth through SEO optimization, performance analysis, engagement improvement, and ethical monetization strategies.",
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
            My Security & <span className="gradient-text">Digital Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I am a student of Computer Science with a strong interest in cybersecurity and cloud security. Alongside my academic learning, I am gaining practical experience in digital platform management, helping YouTube channels improve growth, compliance, and monetization through data-driven strategies.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] transition-shadow duration-300">
                <item.icon className="text-primary" size={28} />
              </div>
              <h4 className="font-semibold mb-3 text-lg">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

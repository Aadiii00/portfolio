import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    name: 'Cloud Security',
    color: 'neon-cyan',
    skills: [
      { name: 'AWS Security', level: 85 },
      { name: 'Azure Security', level: 80 },
      { name: 'IAM & Access Control', level: 88 },
      { name: 'Cloud Firewall', level: 82 },
      { name: 'Container Security', level: 75 },
      { name: 'Zero Trust Architecture', level: 78 },
    ],
  },
  {
    name: 'Cyber Security',
    color: 'neon-purple',
    skills: [
      { name: 'Penetration Testing', level: 80 },
      { name: 'SIEM Tools', level: 75 },
      { name: 'Vulnerability Assessment', level: 85 },
      { name: 'Incident Response', level: 78 },
      { name: 'Malware Analysis', level: 70 },
      { name: 'Threat Intelligence', level: 75 },
    ],
  },
  {
    name: 'Tools & Technologies',
    color: 'neon-blue',
    skills: [
      { name: 'Wireshark', level: 85 },
      { name: 'Nmap', level: 88 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Metasploit', level: 75 },
      { name: 'Linux/Kali', level: 90 },
      { name: 'Python Scripting', level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full relative ${
            color === 'neon-cyan' ? 'bg-neon-cyan' :
            color === 'neon-purple' ? 'bg-neon-purple' : 'bg-neon-blue'
          }`}
          style={{
            boxShadow: isInView ? `0 0 10px hsl(var(--${color}) / 0.5)` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of modern technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-background'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.1 }}
              className={`glass rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
                activeCategory === catIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Glow effect */}
              <div 
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
                  category.color === 'neon-cyan' ? 'bg-neon-cyan' :
                  category.color === 'neon-purple' ? 'bg-neon-purple' : 'bg-neon-blue'
                }`} 
              />

              <h3 className="text-xl font-semibold mb-6 relative">{category.name}</h3>
              
              <div className="space-y-5 relative">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={0.4 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

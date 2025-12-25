import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Global',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of enterprise SaaS platform serving 1M+ users. Architected microservices infrastructure and mentored team of 5 developers.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    color: 'neon-cyan',
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Built and launched 3 products from concept to production. Implemented real-time features and optimized performance by 60%.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Redis', 'GraphQL'],
    color: 'neon-purple',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Co',
    location: 'Austin, TX',
    period: '2019 - 2020',
    description: 'Developed interactive web applications for Fortune 500 clients. Specialized in animation and 3D web experiences.',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    color: 'neon-blue',
  },
  {
    title: 'Junior Developer',
    company: 'CodeStart Inc',
    location: 'Remote',
    period: '2018 - 2019',
    description: 'Started my professional journey building responsive websites and learning modern development practices.',
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
    color: 'neon-pink',
  },
];

function TimelineItem({ experience, index, isLast }: { experience: typeof experiences[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-12 bottom-0 w-px bg-border md:block hidden" />
      )}

      <div className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
        >
          <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
            {/* Glow */}
            <div 
              className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-${experience.color}`}
              style={{ background: `hsl(var(--${experience.color}))` }}
            />

            <div className={`flex items-center gap-2 mb-3 text-muted-foreground text-sm ${isLeft ? 'md:justify-end' : ''}`}>
              <Calendar size={14} />
              <span className="font-mono">{experience.period}</span>
            </div>

            <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
            
            <div className={`flex items-center gap-4 mb-4 text-sm text-muted-foreground ${isLeft ? 'md:justify-end' : ''}`}>
              <span className="flex items-center gap-1">
                <Building2 size={14} />
                {experience.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {experience.location}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{experience.description}</p>

            <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-muted text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative z-10 hidden md:block"
        >
          <div 
            className="w-4 h-4 rounded-full border-2 border-primary bg-background"
            style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.5)' }}
          />
        </motion.div>

        {/* Spacer for alternating layout */}
        <div className="hidden md:block w-[calc(50%-2rem)]" />
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my professional growth and the amazing teams I've worked with.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

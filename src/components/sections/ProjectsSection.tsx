import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Frontend', 'Full-Stack', 'Mobile'];

const projects = [
  {
    id: 1,
    title: 'InnovAlte-AI',
    description: 'An AI-powered innovation platform that helps generate and refine creative ideas using advanced machine learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'AI', 'TypeScript', 'Vercel'],
    category: 'Full-Stack',
    github: 'https://github.com/Aadiii00/innovAlte-AI',
    demo: 'https://idea-engine-pro.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'ShopVerse',
    description: 'A next-generation e-commerce platform with modern UI, seamless shopping experience, and advanced product management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'TypeScript', 'E-commerce', 'Vercel'],
    category: 'Full-Stack',
    github: 'https://github.com/Aadiii00/shopverse-next-gen-shop',
    demo: 'https://shopverse-next-gen-shop.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Keylogger',
    description: 'A Python-based keylogger tool for educational purposes, demonstrating keyboard input monitoring and logging techniques.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
    tags: ['Python', 'Security', 'Cybersecurity'],
    category: 'Full-Stack',
    github: 'https://github.com/Aadiii00/keylogger',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'TrustKart',
    description: 'A modern grocery shopping platform with intuitive UI, product categories, and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'E-commerce', 'Grocery', 'Vercel'],
    category: 'Frontend',
    github: 'https://github.com/Aadiii00/TrustKart',
    demo: 'https://trust-kart.vercel.app/Grocery-react/',
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass rounded-2xl overflow-hidden group cursor-pointer ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex gap-3"
        >
          <Button variant="glass" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
          <Button variant="glass" size="sm" className="flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Code
            </a>
          </Button>
        </motion.div>

        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-xs font-semibold text-background">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-muted text-xs font-mono text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)]'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="neon" size="lg">
            View All Projects
            <ChevronRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

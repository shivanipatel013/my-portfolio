import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "BrainsGPT",
    description: "An AI-powered multi-modal chatbot platform featuring AI Image Generation, Image Understanding, Firebase Authentication, Google Login, Voice Input, and a Community Showcase.",
    tech: ["React", "Node", "Express", "MongoDB", "Firebase", "OpenAI API", "Tailwind CSS"],
    live: "https://brainsgpt-1.onrender.com/",
    github: "https://github.com/shivanipatel013",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "QuickBlog",
    description: "A complete MERN Stack blogging platform featuring JWT authentication, role-based access control, REST APIs, Docker deployment, Admin Dashboard, and responsive UI.",
    tech: ["React", "Node", "Express", "MongoDB", "Docker"],
    live: "https://quickblog-1-j20f.onrender.com/",
    github: "https://github.com/shivanipatel013",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        }}
        className="glass-card overflow-hidden h-full flex flex-col"
      >
        <div className="relative h-60 w-full overflow-hidden border-b border-white/10 group">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string) => (
              <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full transition-colors font-medium text-sm border border-primary/20"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full transition-colors font-medium text-sm border border-white/10"
            >
              <FaGithub size={16} /> Source Code
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Train Induction Planning and Scheduling",
      description:
        "Developed an intelligent system that optimizes train induction planning and scheduling using AI algorithms. The system improves efficiency and reduces operational costs through smart automation.",
      tags: ["AI", "Machine Learning", "Python", "Optimization"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Flash Learn",
      description:
        "Created a web application designed for last-minute revisions. Features include quick summaries, interactive flashcards, and adaptive learning paths to help students maximize their study efficiency.",
      tags: ["React", "Web Development", "UI/UX", "Education"],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="card-glass rounded-3xl p-8 space-y-6 group cursor-pointer"
            >
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient}`} />
              
              <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 card-glass rounded-full hover:bg-card/60 transition-all"
                >
                  <ExternalLink size={18} />
                  <span>View Project</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 card-glass rounded-full hover:bg-card/60 transition-all"
                >
                  <Github size={18} />
                  <span>Code</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

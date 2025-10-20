import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Resume
          </h2>
          <p className="text-muted-foreground text-lg">
            Download my professional resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass rounded-3xl p-12 text-center space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center glow-primary">
              <FileText size={64} className="text-white" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Shailu Mirsha</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Download my resume to learn more about my educational background, technical skills, 
              project experience, and professional achievements.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg glow-primary hover:glow-accent transition-all duration-300"
          >
            <Download size={24} />
            <span>Download Resume</span>
          </motion.button>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="card-glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">6+</div>
              <div className="text-muted-foreground">Technical Skills</div>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground">Dedication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

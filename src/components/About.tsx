import { motion } from "framer-motion";
import { GraduationCap, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know me better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass rounded-3xl p-8 md:p-12 space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 card-glass rounded-2xl"
              >
                <div className="p-3 bg-primary/20 rounded-full">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-muted-foreground">
                    Computer Science & Engineering
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Stella Mary's College of Engineering
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 card-glass rounded-2xl"
              >
                <div className="p-3 bg-accent/20 rounded-full">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contact</h3>
                  <p className="text-muted-foreground break-all">
                    shailumirsha29@gmail.com
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science and Engineering student at Stella Mary's College 
                of Engineering, driven by a love for technology and innovation. My journey in tech 
                has been marked by hands-on projects that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in web development, UI/UX design, and programming, I'm constantly 
                exploring new technologies and pushing the boundaries of what's possible. I believe 
                in creating solutions that are not just functional, but also beautiful and 
                user-friendly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in tech, contributing to 
                open-source projects, or designing intuitive user experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

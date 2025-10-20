import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 60, color: "from-orange-500 to-red-500" },
    { name: "Python", level: 65, color: "from-blue-500 to-yellow-500" },
    { name: "UI/UX Design", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "CSS", level: 50, color: "from-blue-400 to-purple-500" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass rounded-3xl p-8 md:p-12 space-y-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {["Problem Solving", "Team Collaboration", "Quick Learner"].map((trait, index) => (
            <motion.div
              key={trait}
              whileHover={{ scale: 1.05 }}
              className="card-glass rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>
              <h4 className="font-semibold text-lg">{trait}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

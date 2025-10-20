import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
const Contact = () => {
  const socialLinks = [{
    name: "Email",
    icon: Mail,
    href: "mailto:shailumirsha29@gmail.com",
    color: "from-red-500 to-orange-500"
  }, {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "from-blue-600 to-blue-400"
  }, {
    name: "GitHub",
    icon: Github,
    href: "#",
    color: "from-gray-800 to-gray-600"
  }, {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "#",
    color: "from-green-600 to-green-400"
  }, {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "from-purple-600 to-pink-500"
  }];
  return <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in touch for collaborations or opportunities
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="card-glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Start a Conversation?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              feel free to reach out through any of these platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => <motion.a key={link.name} href={link.href} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            y: -5
          }} whileTap={{
            scale: 0.95
          }} className="card-glass rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-card/60 transition-all group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <link.icon className="text-white" size={28} />
                </div>
                <span className="font-semibold text-lg">{link.name}</span>
              </motion.a>)}
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="text-center">
            <motion.a href="mailto:shailumirsha29@gmail.com" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg glow-primary hover:glow-accent transition-all duration-300">
              <Mail size={24} />
              <span>Send an Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} viewport={{
        once: true
      }} className="text-center mt-12 text-muted-foreground">
          <p>© 2024 Shailu Mirsha. Built with Passion and Imagination

        </p>
        </motion.div>
      </div>
    </section>;
};
export default Contact;
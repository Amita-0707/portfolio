import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, Sun, Github, ExternalLink, Code, Database, 
  User, BookOpen, Award, Layout, Cpu, Terminal, 
  Mail, MapPin, ChevronRight, Download, Globe, Menu, X, Linkedin,
  Briefcase // Added missing import
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' }, // Added to nav
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];
const handleContactClick = (e) => {
  // Try to open the mail client
  window.location.href = "mailto:amitachavan.0707@gmail.com";
  
  // Fallback: Copy to clipboard so they can paste it in Gmail/Yahoo manually
  navigator.clipboard.writeText('amitachavan.0707@gmail.com');
  alert("Email client opening... (Address also copied to clipboard!)");
};


  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const skillCategories = [
    { 
      title: "Frontend", 
      icon: <Layout className="text-blue-400" />, 
      skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"] 
    },
    { 
      title: "Backend & AI", 
      icon: <Terminal className="text-emerald-400" />, 
      skills: ["Python", "PHP", "FastAPI", "Java", "Gemini API", "LangChain"] 
    },
    { 
      title: "Data & Tools", 
      icon: <Database className="text-purple-400" />, 
      skills: ["SQL", "MySQL", "Power BI", "Firebase", "Git/GitHub", "XAMPP"] 
    }
  ];

  const experiences = [
    {
      company: "Cravita Technologies / Fortune Cloud",
      role: "Jr. Engineer Intern",
      period: "Jan 2026 - Present",
      description: "Selected for the 'Hire & Train' program focusing on hands-on application of technical concepts and project allocation.",
      skills: ["Technical Competency", "Professional Development"],
      type: "Internship"
    },
    {
      company: "Dream Technology",
      role: "Web Development Intern",
      period: "Jul 2022 - Aug 2022",
      description: "Completed six weeks of industrial training on 'Advanced Web Technology' and developed practical web-based solutions.",
      skills: ["HTML", "CSS", "Advanced Web Tech"],
      type: "Industrial Training"
    }
  ];

  const projects = [
    {
      title: "TourGuide AI",
      desc: "Al-Powered Tourism Platform using Gemini API for real-time travel advice and a custom KNN-inspired preference algorithm.",
      tags: ["Python", "FastAPI", "Gemini", "Chart.js"],
      image: "/images/tour.png", // Update with your actual image paths
      link: "https://github.com/Amita-0707/Travel_Recommendation.git"
    },
    {
      title: "Real Estate System",
      desc: "Full-stack inquiry system with React and PHP backend. Features automated email notifications via PHPMailer.",
      tags: ["React", "PHP", "MySQL", "SMTP"],
      image: "/images/real-estate.png",
      link: "https://github.com/Amita-0707/real-estate.git"
    },
    {
      title: "Financial Literacy Platform",
      desc: "Learning dashboard featuring AI assistants, quizzes, and real-world scenario simulators for finance.",
      tags: ["FastAPI", "Firebase", "Python", "React"],
      image: "/images/images.png",
      link: "https://github.com/Amita-0707/FinLit.git"
    },
    {
      title: "Smart Health Consultancy",
      desc: "Health management platform with diet/workout plans and Zoom API integration for video consultations.",
      tags: ["PHP", "SQL", "Zoom API", "JS"],
      image: "/images/health.png",
      link: "https://github.com/Amita-0707/smart-health-consultancy.git"
    },
     {
      title: "Digital Slambook",
      desc: "Interactive digital version of the traditional slambook with customizable templates and sharing features.",
      tags: ["PHP", "SQL", "JavaScript", "Bootstrap","PHPMailer"],
      image: "/images/slambook.png",
      link: "https://github.com/Amita-0707/digital-slambook.git"
    }
  ];

  return (
    <div className={`${darkMode ? 'bg-[#0b0f1a] text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b ${darkMode ? 'border-white/5 bg-[#0b0f1a]/80' : 'border-black/5 bg-white/80'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter text-blue-500">AMITA CHAVAN</span>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition">
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            <a 
              href="/Amita_Chavan_Resume.pdf" // Ensure this file exists in public folder
              download 
              className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
            >
              Resume
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 opacity-70">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`${darkMode ? 'bg-[#0b0f1a]' : 'bg-white'} md:hidden border-b border-white/5 overflow-hidden`}
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-semibold opacity-70"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
              Available for Internships
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I'm <span className="text-blue-500">Amita Chavan</span></h1>
            <p className="text-xl opacity-80 leading-relaxed mb-8">
              I am an <span className={`${darkMode ? 'text-white' : 'text-slate-900'} font-semibold`}>Information Technology student</span> at WIT Solapur. 
              I specialize in building intelligent applications by combining <span className="text-blue-400">Full-Stack Development</span> with 
              <span className="text-emerald-400"> AI Integration</span>.
            </p>
            <div className="flex flex-wrap gap-6 text-sm opacity-70 mb-8">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> Solapur, Maharashtra</span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-blue-500"/> amitachavan.0707@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Amita-0707" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border ${darkMode ? 'bg-white/5 border-white/10 hover:bg-blue-500/10' : 'bg-black/5 border-black/10 hover:bg-blue-500/10'} transition`}
              >
                <Github size={20}/>
              </a>
              <a 
                href="https://www.linkedin.com/in/amita-chavan" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border ${darkMode ? 'bg-white/5 border-white/10 hover:bg-blue-500/10' : 'bg-black/5 border-black/10 hover:bg-blue-500/10'} transition`}
              >
                <Linkedin size={20}/>
              </a>
<button 
  onClick={handleContactClick}
  className={`${darkMode ? 'bg-white text-black hover:bg-slate-200' : 'bg-black text-white hover:bg-slate-800'} px-6 py-3 rounded-xl font-bold transition shadow-xl`}
>
  Get In Touch
</button>
            </div>
          </motion.div>
          <div className="relative justify-self-center lg:justify-self-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] rotate-3 bg-blue-500 absolute inset-0 blur-3xl opacity-20" />
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden border-2 ${darkMode ? 'border-white/10' : 'border-black/10'} relative z-10`}>
              <img src="/images/image.jpeg" alt="Amita Chavan" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-blue-500" size={28}/> Education
          </h2>
          <div className="space-y-10">
            {[
              {
                title: "Walchand Institute of Technology, Solapur",
                sub: "B.Tech in Information Technology",
                date: "2023 - 2026",
                score: "CGPA: 9.26",
                color: "bg-blue-500"
              },
              {
                title: "SPM Polytechnic Kumathe",
                sub: "Diploma in Computer Science",
                date: "2020 - 2023",
                score: "88.91%",
                color: "bg-slate-500"
              }
            ].map((edu, i) => (
              <motion.div key={i} {...fadeInUp} className={`relative pl-8 border-l-2 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                <div className={`absolute w-4 h-4 ${edu.color} rounded-full -left-[9px] top-1 shadow-lg shadow-blue-500/20`} />
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{edu.date}</span>
                <h4 className="text-xl font-bold mt-1">{edu.title}</h4>
                <p className="opacity-70 mt-1">{edu.sub}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-bold text-sm">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-500" size={28}/> Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-3xl border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-black/5 shadow-sm'}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{exp.period}</span>
                    <h4 className="text-xl font-bold mt-1">{exp.role}</h4>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase w-fit ${darkMode ? 'bg-white/10' : 'bg-blue-50 text-blue-600'}`}>
                    {exp.type}
                  </span>
                </div>
                <p className="opacity-70 mt-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map(s => (
                    <span key={s} className="text-[10px] px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-bold">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="opacity-50">Tools and technologies I use to bring ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div key={i} {...fadeInUp} className={`p-8 rounded-3xl border transition group ${darkMode ? 'bg-[#161b2a] border-white/10 hover:border-blue-500/30' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
                <div className={`mb-6 p-3 rounded-2xl w-fit group-hover:scale-110 transition duration-500 ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className={`px-3 py-1.5 rounded-lg border text-sm transition cursor-default ${darkMode ? 'bg-white/5 border-white/5 hover:bg-blue-500/10 hover:text-blue-400' : 'bg-slate-100 border-black/5 hover:bg-blue-50'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="opacity-50">Building intelligent, full-stack solutions</p>
            </div>
            <a href="https://github.com/Amita-0707" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold flex items-center gap-2 hover:underline">
              View All <Github size={16}/>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div key={idx} {...fadeInUp} className={`group rounded-3xl overflow-hidden border transition duration-500 ${darkMode ? 'bg-[#161b2a] border-white/5 hover:border-blue-500/50' : 'bg-white border-black/5 hover:border-blue-500/50 shadow-md'}`}>
                <div className="h-48 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${darkMode ? 'from-[#161b2a]' : 'from-white'}`} />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(t => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-tighter text-blue-400">{t}</span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed mb-6 h-20 line-clamp-3">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition text-blue-400">
                    View Project <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="awards" className={`py-20 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-purple-500" size={28}/> Certifications & Achievements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "IBM Generative AI Professional", issuer: "IBM" },
              { title: "AWS Academy Cloud Foundations", issuer: "AWS" },
              { title: "2nd Place - National PPT Competition", issuer: "National Level" },
              { title: "50 SQL Badge", issuer: "LeetCode" },
              { title: "Data Analytics Virtual Experience", issuer: "Deloitte" },
              { title: "Java Programming", issuer: "Infosys" }
            ].map((cert, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className={`p-5 rounded-2xl border flex items-center gap-4 group transition ${darkMode ? 'bg-[#161b2a] border-white/5 hover:bg-white/10' : 'bg-white border-black/5 hover:border-blue-500/20 shadow-sm'}`}
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition duration-300">
                  <Award size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-bold leading-snug">{cert.title}</h5>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 text-center border-t ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
        <p className="text-sm opacity-40 mb-4 uppercase tracking-[0.4em]">Designed & Built by Amita Chavan</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Amita-0707" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-blue-500 transition"><Github size={20}/></a>
          <a href="https://www.linkedin.com/in/amita-chavan" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-blue-500 transition"><Linkedin size={20}/></a>
          <a href="mailto:amitachavan.0707@gmail.com" className="opacity-40 hover:opacity-100 hover:text-blue-500 transition"><Mail size={20}/></a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;